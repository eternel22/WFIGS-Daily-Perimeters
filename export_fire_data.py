#!/usr/bin/env python3
"""
Export WFIGS fire data for fire_explorer.html.

Outputs:
  fires_index.js        — compact list of all fires (loaded once at startup)
  fires/<uid>.js        — per-fire detail loaded on demand via script injection
"""
import geopandas as gpd
import json
import re
import pandas as pd
import numpy as np
from pathlib import Path
from tqdm import tqdm
from shapely.geometry import mapping

# ── Config ────────────────────────────────────────────────────────────────────
INPUT_FILE = "wfigs_daily_perimeters.geojson"
FIRES_DIR  = Path("fires")
SIMPLIFY   = 0.0002         # degrees tolerance for geometry simplification (~20 m)

FIRES_DIR.mkdir(exist_ok=True)

# ── Load ──────────────────────────────────────────────────────────────────────
print("Loading GeoJSON…")
gdf = gpd.read_file(INPUT_FILE)
print(f"  {len(gdf):,} records loaded")

# ── Timestamp helpers ─────────────────────────────────────────────────────────
# attr_* int64 columns use Unix milliseconds.
# poly_* float64 date columns use OLE Automation format (days since 1899-12-30),
# which is what ArcGIS writes for date fields exported to GeoJSON.

def unix_ms_to_dt(series):
    """Unix millisecond timestamps → datetime, safe against inf/overflow.
    Casting to Int64 (nullable int) before pd.to_datetime avoids the
    float-to-nanoseconds multiply that overflows on large/inf values."""
    s = pd.to_numeric(series, errors="coerce")
    mask = np.isfinite(s) & (s >= 0) & (s <= 4_102_444_800_000)  # up to year 2100
    return pd.to_datetime(s.where(mask).astype("Int64"), unit="ms", errors="coerce")

gdf["_disc_ts"]    = unix_ms_to_dt(gdf["attr_FireDiscoveryDateTime"])
gdf["_poly_ts"]    = unix_ms_to_dt(gdf["poly_PolygonDateTime"])
gdf["_out_ts"]     = unix_ms_to_dt(gdf["attr_FireOutDateTime"])
gdf["_created_ts"] = unix_ms_to_dt(gdf["attr_CreatedOnDateTime_dt"])

# Best date per report: polygon capture date, else discovery date
gdf["_report_ts"] = gdf["_poly_ts"].fillna(gdf["_disc_ts"]).fillna(gdf["_created_ts"])
gdf["_report_date"] = gdf["_report_ts"].dt.strftime("%Y-%m-%d").where(gdf["_report_ts"].notna(), None)

# Ensure a non-null group key
gdf["_uid"] = gdf["attr_UniqueFireIdentifier"].fillna("").astype(str).str.strip()
gdf.loc[gdf["_uid"] == "", "_uid"] = "UNKNOWN"

# ── Scalar helpers ────────────────────────────────────────────────────────────
def fv(val):
    """Float → rounded to 1 dp, or None."""
    try:
        v = float(val)
        return None if np.isnan(v) else round(v, 1)
    except (TypeError, ValueError):
        return None

def iv(val):
    """Int or None."""
    try:
        return int(val)
    except (TypeError, ValueError):
        return None

def first_str(series):
    vals = series.dropna().astype(str).str.strip()
    vals = vals[vals != ""]
    return vals.iloc[0] if len(vals) else None

# ── Geometry simplification ───────────────────────────────────────────────────
def simplify_geom(geom):
    if geom is None or geom.is_empty:
        return None
    try:
        s = geom.simplify(SIMPLIFY, preserve_topology=True)
        if s.is_empty:
            return None
        return mapping(s)   # returns a GeoJSON-compatible dict
    except Exception:
        return None

# ── Safe filenames ────────────────────────────────────────────────────────────
def safe_fname(uid: str) -> str:
    return re.sub(r"[^\w\-]", "_", uid)[:120]

fname_counter: dict[str, int] = {}

def unique_fname(uid: str) -> str:
    base = safe_fname(uid)
    if base not in fname_counter:
        fname_counter[base] = 0
        return base
    fname_counter[base] += 1
    return f"{base}_{fname_counter[base]}"

# ── Main loop ─────────────────────────────────────────────────────────────────
print("Grouping and exporting fires…")
groups = gdf.groupby("_uid", sort=False)
index_entries = []

for uid, grp in tqdm(groups, desc="Fires", unit="fire"):
    # Sort reports chronologically
    # BurnPeriod is the authoritative sequential index for daily snapshots.
    # Fall back to poly_PolygonDateTime, then attr_FireDiscoveryDateTime for records missing it.
    grp = grp.sort_values(
        ["BurnPeriod", "_report_ts"],
        ascending=True,
        na_position="last",
    ).reset_index(drop=True)

    fname = unique_fname(uid)

    # ── Fire-level metadata ───────────────────────────────────────────────────
    name  = first_str(grp["attr_IncidentName"]) or first_str(grp["poly_IncidentName"]) or uid
    state = first_str(grp["attr_POOState"])

    # Date range
    disc_dates  = grp["_disc_ts"].dropna()
    fire_start  = str(disc_dates.min())[:10] if len(disc_dates) else None
    out_dates   = grp["_out_ts"].dropna()
    fire_end    = str(out_dates.max())[:10] if len(out_dates) else (
                  str(grp["_report_ts"].dropna().max())[:10] if grp["_report_ts"].notna().any() else None)

    # Final acres: last non-null across candidate columns
    final_acres = None
    for col in ("attr_IncidentSize", "poly_GISAcres", "poly_Acres_AutoCalc"):
        vals = grp[col].dropna()
        if len(vals):
            final_acres = round(float(vals.iloc[-1]), 1)
            break

    has_geom = grp.geometry.notna() & ~grp.geometry.is_empty

    # ── Time series (one entry per report) ────────────────────────────────────
    series = []
    for _, row in grp.iterrows():
        series.append({
            "bp": iv(row.get("BurnPeriod")),
            "d":  row["_report_date"],
            "is": fv(row.get("attr_IncidentSize")),
            "ga": fv(row.get("poly_GISAcres")),
            "aa": fv(row.get("poly_Acres_AutoCalc")),
            "tp": iv(row.get("attr_TotalIncidentPersonnel")),
        })

    # ── Polygons (only rows with valid geometry) ──────────────────────────────
    polygons = []
    for _, row in grp[has_geom].iterrows():
        g = simplify_geom(row.geometry)
        if g:
            polygons.append({
                "bp":   iv(row.get("BurnPeriod")),
                "d":    row["_report_date"],
                "is":   fv(row.get("attr_IncidentSize")),
                "ga":   fv(row.get("poly_GISAcres")),
                "aa":   fv(row.get("poly_Acres_AutoCalc")),
                "g":    g,
            })

    # ── Write per-fire JS (JSONP-style, works with file://) ───────────────────
    fire_obj = {
        "uid":      str(uid),
        "name":     name,
        "state":    state,
        "series":   series,
        "polygons": polygons,
    }
    out_path = FIRES_DIR / f"{fname}.js"
    with open(out_path, "w", encoding="utf-8") as fh:
        fh.write("window.__fd(")
        json.dump(fire_obj, fh, separators=(",", ":"), default=str)
        fh.write(");\n")

    # ── Index entry ───────────────────────────────────────────────────────────
    index_entries.append({
        "uid":   str(uid),
        "fn":    fname,
        "name":  name,
        "state": state or "",
        "start": fire_start or "",
        "end":   fire_end   or "",
        "n":     len(grp),
        "np":    int(has_geom.sum()),
        "acres": final_acres,
    })

# ── Write index ───────────────────────────────────────────────────────────────
print("Writing fires_index.js…")
with open("fires_index.js", "w", encoding="utf-8") as fh:
    fh.write("const FIRES_INDEX=")
    json.dump(index_entries, fh, separators=(",", ":"))
    fh.write(";\n")

total_size = sum(f.stat().st_size for f in FIRES_DIR.iterdir()) / 1e6
print(f"\nDone!")
print(f"  {len(index_entries):,} fires  →  fires_index.js  +  {len(index_entries):,} files in fires/")
print(f"  fires/ total size: {total_size:.1f} MB")
