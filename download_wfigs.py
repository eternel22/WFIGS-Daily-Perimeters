import requests
import json
import time
from tqdm import tqdm

FEATURE_SERVER = "https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/WFIGS_Daily_Perimeters_Public/FeatureServer/0/query"
OUTPUT_FILE = "wfigs_daily_perimeters.geojson"

all_features = []
offset = 0
batch = 500  # smaller batches reduce dropped-connection risk

# Get total record count for the progress bar
count_resp = requests.get(FEATURE_SERVER, params={"where": "1=1", "returnCountOnly": "true", "f": "json"}, timeout=60)
count_resp.raise_for_status()
total = count_resp.json().get("count")

with tqdm(total=total, unit="rec", desc="Downloading") as pbar:
    while True:
        params = {
            "where": "1=1",
            "outFields": "*",
            "outSR": "4326",
            "f": "geojson",
            "resultOffset": offset,
            "resultRecordCount": batch,
        }
        RETRYABLE = (
            requests.exceptions.ChunkedEncodingError,
            requests.exceptions.ConnectionError,
            requests.exceptions.Timeout,
        )
        for attempt in range(5):
            try:
                resp = requests.get(FEATURE_SERVER, params=params, timeout=120)
                resp.raise_for_status()
                break
            except requests.exceptions.HTTPError:
                if resp.status_code == 504 and attempt < 4:
                    wait = 2 ** attempt
                    tqdm.write(f"  504 at offset {offset}, retrying in {wait}s...")
                    time.sleep(wait)
                else:
                    raise
            except RETRYABLE as e:
                if attempt < 4:
                    wait = 2 ** attempt
                    tqdm.write(f"  {type(e).__name__} at offset {offset}, retrying in {wait}s...")
                    time.sleep(wait)
                else:
                    raise
        data = resp.json()

        features = data.get("features", [])
        if not features:
            break

        all_features.extend(features)
        pbar.update(len(features))

        if not data.get("properties", {}).get("exceededTransferLimit", False):
            break
        offset += batch

# Save as GeoJSON
geojson = {"type": "FeatureCollection", "features": all_features}
with open(OUTPUT_FILE, "w") as f:
    json.dump(geojson, f)

print(f"\nSaved {len(all_features)} total records to '{OUTPUT_FILE}'")