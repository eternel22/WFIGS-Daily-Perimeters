const COLUMN_STATS = {
  "OBJECTID": {
    "dtype": "int32",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "numeric",
    "mean": 26501.812,
    "median": 26901.0,
    "min": 1.0,
    "max": 52755.0,
    "std": 15357.284
  },
  "poly_SourceOID": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 51590,
    "null_count": 111,
    "null_pct": 0.2,
    "kind": "numeric",
    "mean": 26007.294,
    "median": 26583.5,
    "min": 4.0,
    "max": 65626.0,
    "std": 14446.732
  },
  "poly_IncidentName": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51427,
    "null_count": 274,
    "null_pct": 0.5,
    "kind": "categorical",
    "unique": 24107,
    "top_values": [
      [
        "Ridge",
        181
      ],
      [
        "Flat",
        124
      ],
      [
        "Garnet",
        111
      ],
      [
        "Lower Sugarloaf",
        110
      ],
      [
        "Cougar Creek",
        105
      ],
      [
        "Coffee Pot",
        104
      ],
      [
        "Labor Mountain",
        104
      ]
    ],
    "example": "000020"
  },
  "poly_FeatureCategory": {
    "dtype": "object",
    "count": 51701,
    "non_null": 50441,
    "null_count": 1260,
    "null_pct": 2.4,
    "kind": "categorical",
    "unique": 3,
    "top_values": [
      [
        "Wildfire Daily Fire Perimeter",
        36832
      ],
      [
        "Wildfire Final Fire Perimeter",
        12723
      ],
      [
        "Prescribed Fire",
        886
      ]
    ],
    "example": "Wildfire Daily Fire Perimeter"
  },
  "poly_MapMethod": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51628,
    "null_count": 73,
    "null_pct": 0.1,
    "kind": "categorical",
    "unique": 33,
    "top_values": [
      [
        "Mixed Methods",
        20542
      ],
      [
        "Hand Sketch",
        7576
      ],
      [
        "IR Image Interpretation",
        6170
      ],
      [
        "Auto-generated for InFORM",
        4247
      ],
      [
        "Auto-generated",
        3453
      ],
      [
        "GPS-Walked",
        2730
      ],
      [
        "Image Interpretation",
        2019
      ]
    ],
    "example": "Hand Sketch"
  },
  "poly_GISAcres": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 48340,
    "null_count": 3361,
    "null_pct": 6.5,
    "kind": "numeric",
    "mean": 16317.868,
    "median": 39.751,
    "min": 0.0,
    "max": 282460019.304,
    "std": 1457816.495
  },
  "poly_DeleteThis": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51646,
    "null_count": 55,
    "null_pct": 0.1,
    "kind": "categorical",
    "unique": 6,
    "top_values": [
      [
        "No",
        51386
      ],
      [
        "Yes - No Longer Needed",
        159
      ],
      [
        "Yes - Editing Mistake",
        59
      ],
      [
        "Yes",
        40
      ],
      [
        "0.425897481058674",
        1
      ],
      [
        " ",
        1
      ]
    ],
    "example": "No"
  },
  "poly_FeatureAccess": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51673,
    "null_count": 28,
    "null_pct": 0.1,
    "kind": "categorical",
    "unique": 4,
    "top_values": [
      [
        "Public",
        51569
      ],
      [
        "Cooperators",
        56
      ],
      [
        "Incident",
        44
      ],
      [
        "Restricted",
        4
      ]
    ],
    "example": "Public"
  },
  "poly_FeatureStatus": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51696,
    "null_count": 5,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 5,
    "top_values": [
      [
        "Approved",
        51278
      ],
      [
        "Proposed",
        335
      ],
      [
        "Archive",
        64
      ],
      [
        "In Review",
        18
      ],
      [
        "123222.975622898",
        1
      ]
    ],
    "example": "Approved"
  },
  "poly_IsVisible": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51683,
    "null_count": 18,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 3,
    "top_values": [
      [
        "Yes",
        51539
      ],
      [
        "No",
        143
      ],
      [
        " ",
        1
      ]
    ],
    "example": "Yes"
  },
  "poly_CreateDate": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 38225,
    "null_count": 13476,
    "null_pct": 26.1,
    "kind": "datetime",
    "min": "2021-05-04 22:50:44",
    "max": "2026-04-13 17:34:47"
  },
  "poly_DateCurrent": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 46248,
    "null_count": 5453,
    "null_pct": 10.5,
    "kind": "datetime",
    "min": "2021-05-04 22:50:44",
    "max": "2026-04-13 17:34:47"
  },
  "poly_PolygonDateTime": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 43414,
    "null_count": 8287,
    "null_pct": 16.0,
    "kind": "datetime",
    "min": "1899-12-30 00:00:00",
    "max": "2029-07-30 05:40:00"
  },
  "poly_IRWINID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 29302,
    "top_values": [
      [
        "{569FB7BD-BA9B-4706-9D42-F05C7C6AC148}",
        111
      ],
      [
        "{348293DC-93BF-4330-A563-5A9B0EBEDA94}",
        104
      ],
      [
        "{68B988A1-C190-4F0C-9BEA-A658D389D167}",
        100
      ],
      [
        "{531B9F1B-1B36-4B91-8E63-2AADA4881DEB}",
        98
      ],
      [
        "{EC1EC492-0C76-4B92-8960-D18A13405F1C}",
        98
      ],
      [
        "{1E0FCF1D-5F6E-454D-AC7E-901A510B3753}",
        95
      ],
      [
        "{28E947BF-29D5-4F8D-8EEB-8F6D51448B31}",
        95
      ]
    ],
    "example": "{9BFB4CDC-2EFE-4CD7-AA7E-ADCE3F402EA6}"
  },
  "poly_FORID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 17745,
    "null_count": 33956,
    "null_pct": 65.7,
    "kind": "categorical",
    "unique": 17519,
    "top_values": [
      [
        "{6F278C1A-C0BF-4133-BFCE-FCFDBD9DDC44}",
        14
      ],
      [
        "{F747E880-881C-47A4-9150-B4C17E8AE796}",
        10
      ],
      [
        "{28E6888C-B7EE-47F6-86EE-3F3DDCA26ECB}",
        7
      ],
      [
        "{D1157634-2681-4004-98D1-7CED5DC9B0D8}",
        7
      ],
      [
        "{88BF6091-406A-46C0-8B80-D046B5895F5F}",
        6
      ],
      [
        "{45EF03DA-1E22-4516-8322-A6B8C9D7F938}",
        5
      ],
      [
        "{88C9D979-3F53-4098-88FE-E1E04E4EE054}",
        5
      ]
    ],
    "example": "{0078E575-DB71-4068-9BE1-8D49F3E3FF16}"
  },
  "poly_Acres_AutoCalc": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 51593,
    "null_count": 108,
    "null_pct": 0.2,
    "kind": "numeric",
    "mean": 6645.591,
    "median": 45.786,
    "min": 0.0,
    "max": 1112682.237,
    "std": 36107.487
  },
  "poly_SourceGlobalID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 34786,
    "null_count": 16915,
    "null_pct": 32.7,
    "kind": "categorical",
    "unique": 20343,
    "top_values": [
      [
        "{53F5E39B-3C1D-4195-9A39-833ABBB227A5}",
        71
      ],
      [
        "{95B4B684-8998-4C80-AA14-1D5BB762B9B2}",
        56
      ],
      [
        "{71215532-6F47-4BD6-B8B3-FFC351ED34F0}",
        54
      ],
      [
        "{F7380108-11D3-4999-A8EC-5903118888E2}",
        53
      ],
      [
        "{31C1CA8A-F39B-4BA1-BEA8-D29C9FA74677}",
        52
      ],
      [
        "{922033D7-28C9-425E-A7E9-86EBD236CA3D}",
        51
      ],
      [
        "{F3202376-5B2B-471E-A953-DA75B3CDEB85}",
        48
      ]
    ],
    "example": "{BC1A8F33-F20C-43B9-BE95-7DB47CE86277}"
  },
  "poly_Source": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 10,
    "top_values": [
      [
        "FFP",
        17390
      ],
      [
        "2024 NIFS",
        13545
      ],
      [
        "2025 NIFS",
        10761
      ],
      [
        "2023 NIFS",
        7930
      ],
      [
        "2026 NIFS",
        1804
      ],
      [
        "Decertified",
        180
      ],
      [
        "Inspector",
        85
      ]
    ],
    "example": "2023 NIFS"
  },
  "attr_SourceOID": {
    "dtype": "int32",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "numeric",
    "mean": 24170230.494,
    "median": 32880392.0,
    "min": 3036711.0,
    "max": 43269392.0,
    "std": 14233924.21
  },
  "attr_ABCDMisc": {
    "dtype": "object",
    "count": 51701,
    "non_null": 3889,
    "null_count": 47812,
    "null_pct": 92.5,
    "kind": "categorical",
    "unique": 218,
    "top_values": [
      [
        "EK2M",
        277
      ],
      [
        "EKW0",
        261
      ],
      [
        "EK2R",
        229
      ],
      [
        "EKT5",
        160
      ],
      [
        "EKV5",
        154
      ],
      [
        "EK2X",
        109
      ],
      [
        "EK2A",
        102
      ]
    ],
    "example": "EK3G"
  },
  "attr_ADSPermissionState": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 4,
    "top_values": [
      [
        "DEFAULT",
        22601
      ],
      [
        "CERTIFIED",
        17386
      ],
      [
        "ICS209",
        11319
      ],
      [
        "FIREREPORTING",
        395
      ]
    ],
    "example": "DEFAULT"
  },
  "attr_CalculatedAcres": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 25768,
    "null_count": 25933,
    "null_pct": 50.2,
    "kind": "numeric",
    "mean": 9457.564,
    "median": 164.375,
    "min": 0.0,
    "max": 976975.62,
    "std": 34507.787
  },
  "attr_ContainmentDateTime": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 24586,
    "null_count": 27115,
    "null_pct": 52.4,
    "kind": "datetime",
    "min": "2020-01-01 22:00:00",
    "max": "2026-12-02 22:20:00"
  },
  "attr_ControlDateTime": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 21726,
    "null_count": 29975,
    "null_pct": 58.0,
    "kind": "datetime",
    "min": "2020-01-02 18:00:00",
    "max": "2026-04-13 15:19:00"
  },
  "attr_CreatedBySystem": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 17,
    "top_values": [
      [
        "wildcade",
        31103
      ],
      [
        "wildcad",
        8483
      ],
      [
        "firesponse",
        3213
      ],
      [
        "INFORM_Inspector",
        1899
      ],
      [
        "iffrs",
        1506
      ],
      [
        "cfcad",
        1273
      ],
      [
        "INFORM_Mobile",
        1181
      ]
    ],
    "example": "INFORM_Inspector"
  },
  "attr_IncidentSize": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 50762,
    "null_count": 939,
    "null_pct": 1.8,
    "kind": "numeric",
    "mean": 6351.753,
    "median": 43.5,
    "min": 0.0,
    "max": 1076638.0,
    "std": 33199.423
  },
  "attr_DiscoveryAcres": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 32300,
    "null_count": 19401,
    "null_pct": 37.5,
    "kind": "numeric",
    "mean": 530.868,
    "median": 1.0,
    "min": 0.01,
    "max": 1058482.0,
    "std": 15794.383
  },
  "attr_DispatchCenterID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51700,
    "null_count": 1,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 191,
    "top_values": [
      [
        "TXTIC",
        3607
      ],
      [
        "MNMNCC",
        2280
      ],
      [
        "WANEC",
        1603
      ],
      [
        "AKYFDC",
        1451
      ],
      [
        "WACWC",
        1305
      ],
      [
        "WIWISC",
        1300
      ],
      [
        "MTMCC",
        1203
      ]
    ],
    "example": "MNMNCC"
  },
  "attr_EstimatedCostToDate": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 16512,
    "null_count": 35189,
    "null_pct": 68.1,
    "kind": "numeric",
    "mean": 9873104.431,
    "median": 1748910.0,
    "min": 0.0,
    "max": 900000000.0,
    "std": 22552472.894
  },
  "attr_Fatalities": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 10158,
    "null_count": 41543,
    "null_pct": 80.4,
    "kind": "numeric",
    "mean": 0.048,
    "median": 0.0,
    "min": 0.0,
    "max": 115.0,
    "std": 1.186
  },
  "attr_FinalAcres": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 1509,
    "null_count": 50192,
    "null_pct": 97.1,
    "kind": "numeric",
    "mean": 31.043,
    "median": 0.91,
    "min": 0.01,
    "max": 2839.9,
    "std": 195.782
  },
  "attr_FFReportApprovedByTitle": {
    "dtype": "object",
    "count": 51701,
    "non_null": 0,
    "null_count": 51701,
    "null_pct": 100.0,
    "kind": "categorical",
    "unique": 0,
    "top_values": [],
    "example": null
  },
  "attr_FFReportApprovedByUnit": {
    "dtype": "object",
    "count": 51701,
    "non_null": 0,
    "null_count": 51701,
    "null_pct": 100.0,
    "kind": "categorical",
    "unique": 0,
    "top_values": [],
    "example": null
  },
  "attr_FFReportApprovedDate": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 17393,
    "null_count": 34308,
    "null_pct": 66.4,
    "kind": "datetime",
    "min": "2020-03-12 17:53:16",
    "max": "2026-04-13 16:22:09"
  },
  "attr_FireBehaviorGeneral": {
    "dtype": "object",
    "count": 51701,
    "non_null": 17753,
    "null_count": 33948,
    "null_pct": 65.7,
    "kind": "categorical",
    "unique": 4,
    "top_values": [
      [
        "Minimal",
        6205
      ],
      [
        "Active",
        5800
      ],
      [
        "Moderate",
        4625
      ],
      [
        "Extreme",
        1123
      ]
    ],
    "example": "Minimal"
  },
  "attr_FireBehaviorGeneral1": {
    "dtype": "object",
    "count": 51701,
    "non_null": 8991,
    "null_count": 42710,
    "null_pct": 82.6,
    "kind": "categorical",
    "unique": 16,
    "top_values": [
      [
        "Creeping",
        1603
      ],
      [
        "Backing",
        1475
      ],
      [
        "Flanking",
        1280
      ],
      [
        "Uphill Runs",
        946
      ],
      [
        "Smoldering",
        836
      ],
      [
        "Wind Driven Runs",
        561
      ],
      [
        "Short Crown Runs",
        505
      ]
    ],
    "example": "Smoldering"
  },
  "attr_FireBehaviorGeneral2": {
    "dtype": "object",
    "count": 51701,
    "non_null": 14135,
    "null_count": 37566,
    "null_pct": 72.7,
    "kind": "categorical",
    "unique": 16,
    "top_values": [
      [
        "Creeping",
        2327
      ],
      [
        "Smoldering",
        2173
      ],
      [
        "Backing",
        2063
      ],
      [
        "Flanking",
        1822
      ],
      [
        "Group Torching",
        921
      ],
      [
        "Torching",
        889
      ],
      [
        "Running",
        767
      ]
    ],
    "example": "Running"
  },
  "attr_FireBehaviorGeneral3": {
    "dtype": "object",
    "count": 51701,
    "non_null": 12769,
    "null_count": 38932,
    "null_pct": 75.3,
    "kind": "categorical",
    "unique": 16,
    "top_values": [
      [
        "Smoldering",
        2288
      ],
      [
        "Backing",
        1754
      ],
      [
        "Spotting",
        1578
      ],
      [
        "Creeping",
        1165
      ],
      [
        "Short-range Spotting",
        1052
      ],
      [
        "Flanking",
        931
      ],
      [
        "Isolated Torching",
        730
      ]
    ],
    "example": "Creeping"
  },
  "attr_FireCause": {
    "dtype": "object",
    "count": 51701,
    "non_null": 47823,
    "null_count": 3878,
    "null_pct": 7.5,
    "kind": "categorical",
    "unique": 4,
    "top_values": [
      [
        "Human",
        17898
      ],
      [
        "Natural",
        15231
      ],
      [
        "Undetermined",
        14691
      ],
      [
        "Unknown",
        3
      ]
    ],
    "example": "Undetermined"
  },
  "attr_FireCauseGeneral": {
    "dtype": "object",
    "count": 51701,
    "non_null": 17965,
    "null_count": 33736,
    "null_pct": 65.3,
    "kind": "categorical",
    "unique": 22,
    "top_values": [
      [
        "Natural",
        4568
      ],
      [
        "Debris and open burning",
        3284
      ],
      [
        "Undetermined",
        2525
      ],
      [
        "Equipment and vehicle use",
        1970
      ],
      [
        "Other causes",
        1459
      ],
      [
        "Arson",
        879
      ],
      [
        "Recreation and ceremony",
        637
      ]
    ],
    "example": "Power generation/transmission/distribution"
  },
  "attr_FireCauseSpecific": {
    "dtype": "object",
    "count": 51701,
    "non_null": 14111,
    "null_count": 37590,
    "null_pct": 72.7,
    "kind": "categorical",
    "unique": 79,
    "top_values": [
      [
        "Lightning",
        4129
      ],
      [
        "Unknown",
        851
      ],
      [
        "Origin and/or cause not identified",
        788
      ],
      [
        "Electrical transmission/distribution systems",
        700
      ],
      [
        "Passenger vehicle/motorized RV",
        586
      ],
      [
        "Not investigated",
        560
      ],
      [
        "Under investigation",
        546
      ]
    ],
    "example": "Electrical transmission/distribution systems"
  },
  "attr_FireCode": {
    "dtype": "object",
    "count": 51701,
    "non_null": 37335,
    "null_count": 14366,
    "null_pct": 27.8,
    "kind": "categorical",
    "unique": 19041,
    "top_values": [
      [
        "S97C",
        111
      ],
      [
        "S98T",
        104
      ],
      [
        "S8LK",
        100
      ],
      [
        "S4CP",
        98
      ],
      [
        "R7M7",
        95
      ],
      [
        "R3TP",
        95
      ],
      [
        "RZ79",
        95
      ]
    ],
    "example": "P54P"
  },
  "attr_FireDepartmentID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 1376,
    "null_count": 50325,
    "null_pct": 97.3,
    "kind": "categorical",
    "unique": 259,
    "top_values": [
      [
        "S4210",
        124
      ],
      [
        "66010",
        55
      ],
      [
        "29099",
        47
      ],
      [
        "S4120",
        47
      ],
      [
        "S4110",
        46
      ],
      [
        "SDPRA",
        45
      ],
      [
        "S4230",
        44
      ]
    ],
    "example": "15161"
  },
  "attr_FireDiscoveryDateTime": {
    "dtype": "int64",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "datetime",
    "min": "2018-08-03 02:26:00",
    "max": "2026-04-13 00:00:00"
  },
  "attr_FireMgmtComplexity": {
    "dtype": "object",
    "count": 51701,
    "non_null": 8357,
    "null_count": 43344,
    "null_pct": 83.8,
    "kind": "categorical",
    "unique": 6,
    "top_values": [
      [
        "Type 5 Incident",
        3764
      ],
      [
        "Type 4 Incident",
        1749
      ],
      [
        "Type 3 Incident",
        1558
      ],
      [
        "Type 2 Incident",
        735
      ],
      [
        "Type 1 Incident",
        545
      ],
      [
        "Type 1 Prescribed Fire",
        6
      ]
    ],
    "example": "Type 5 Incident"
  },
  "attr_FireOutDateTime": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 21578,
    "null_count": 30123,
    "null_pct": 58.3,
    "kind": "datetime",
    "min": "2018-09-16 20:40:00",
    "max": "2026-04-13 16:57:00"
  },
  "attr_FireStrategyConfinePercent": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 15335,
    "null_count": 36366,
    "null_pct": 70.3,
    "kind": "numeric",
    "mean": 5.454,
    "median": 0.0,
    "min": 0.0,
    "max": 100.0,
    "std": 18.653
  },
  "attr_FireStrategyFullSuppPrcnt": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 15335,
    "null_count": 36366,
    "null_pct": 70.3,
    "kind": "numeric",
    "mean": 80.24,
    "median": 100.0,
    "min": 0.0,
    "max": 100.0,
    "std": 38.377
  },
  "attr_FireStrategyMonitorPercent": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 15335,
    "null_count": 36366,
    "null_pct": 70.3,
    "kind": "numeric",
    "mean": 9.994,
    "median": 0.0,
    "min": 0.0,
    "max": 100.0,
    "std": 28.14
  },
  "attr_FireStrategyPointZonePrcnt": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 15335,
    "null_count": 36366,
    "null_pct": 70.3,
    "kind": "numeric",
    "mean": 4.247,
    "median": 0.0,
    "min": 0.0,
    "max": 100.0,
    "std": 17.264
  },
  "attr_FSJobCode": {
    "dtype": "object",
    "count": 51701,
    "non_null": 29896,
    "null_count": 21805,
    "null_pct": 42.2,
    "kind": "categorical",
    "unique": 44,
    "top_values": [
      [
        "PN",
        6451
      ],
      [
        "PD",
        5710
      ],
      [
        "P6",
        4102
      ],
      [
        "P8",
        2335
      ],
      [
        "P4",
        2088
      ],
      [
        "P3",
        1773
      ],
      [
        "P9",
        1366
      ]
    ],
    "example": "PN"
  },
  "attr_FSOverrideCode": {
    "dtype": "object",
    "count": 51701,
    "non_null": 29499,
    "null_count": 22202,
    "null_pct": 42.9,
    "kind": "categorical",
    "unique": 146,
    "top_values": [
      [
        "1522",
        8197
      ],
      [
        "1532",
        4737
      ],
      [
        "1502",
        947
      ],
      [
        "0618",
        843
      ],
      [
        "0615",
        827
      ],
      [
        "0905",
        747
      ],
      [
        "0402",
        625
      ]
    ],
    "example": "1522"
  },
  "attr_GACC": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51699,
    "null_count": 2,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 10,
    "top_values": [
      [
        "NWCC",
        10167
      ],
      [
        "SACC",
        8400
      ],
      [
        "EACC",
        7495
      ],
      [
        "GBCC",
        5524
      ],
      [
        "NRCC",
        4659
      ],
      [
        "RMCC",
        3837
      ],
      [
        "SWCC",
        3431
      ]
    ],
    "example": "EACC"
  },
  "attr_ICS209ReportDateTime": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 17536,
    "null_count": 34165,
    "null_pct": 66.1,
    "kind": "datetime",
    "min": "2018-08-07 23:30:00",
    "max": "2026-04-12 23:40:04"
  },
  "attr_ICS209RptForTimePeriodFrom": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 15441,
    "null_count": 36260,
    "null_pct": 70.1,
    "kind": "numeric",
    "mean": 1728548574462.794,
    "median": 1725487200000.0,
    "min": 1533596400000.0,
    "max": 1776031200000.0,
    "std": 23920323145.036
  },
  "attr_ICS209RptForTimePeriodTo": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 15441,
    "null_count": 36260,
    "null_pct": 70.1,
    "kind": "numeric",
    "mean": 1728656419117.933,
    "median": 1725573600000.0,
    "min": 1533684600000.0,
    "max": 1776036600000.0,
    "std": 23915943723.039
  },
  "attr_ICS209ReportStatus": {
    "dtype": "object",
    "count": 51701,
    "non_null": 15441,
    "null_count": 36260,
    "null_pct": 70.1,
    "kind": "categorical",
    "unique": 3,
    "top_values": [
      [
        "U",
        11412
      ],
      [
        "F",
        2529
      ],
      [
        "I",
        1500
      ]
    ],
    "example": "F"
  },
  "attr_IncidentManagementOrg": {
    "dtype": "object",
    "count": 51701,
    "non_null": 14689,
    "null_count": 37012,
    "null_pct": 71.6,
    "kind": "categorical",
    "unique": 8,
    "top_values": [
      [
        "Type 3 IC",
        5154
      ],
      [
        "Type 3 Team",
        3755
      ],
      [
        "Type 4 IC",
        2814
      ],
      [
        "Type 5 IC",
        1314
      ],
      [
        "Type 1 Team",
        994
      ],
      [
        "Type 2 Team",
        584
      ],
      [
        "NIMO",
        65
      ]
    ],
    "example": "Type 5 IC"
  },
  "attr_IncidentName": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 23578,
    "top_values": [
      [
        "Ridge",
        180
      ],
      [
        "Coffee Pot",
        132
      ],
      [
        "LOWER SUGARLOAF",
        111
      ],
      [
        "LABOR MOUNTAIN",
        104
      ],
      [
        "Lookout",
        103
      ],
      [
        "Kelly",
        102
      ],
      [
        "GARNET",
        100
      ]
    ],
    "example": "000020"
  },
  "attr_IncidentShortDescription": {
    "dtype": "object",
    "count": 51701,
    "non_null": 15683,
    "null_count": 36018,
    "null_pct": 69.7,
    "kind": "categorical",
    "unique": 2286,
    "top_values": [
      [
        "null Miles null from null, ",
        294
      ],
      [
        "12 Miles NE from LEAVENWORTH, WA",
        110
      ],
      [
        "10 Miles N from Cle Elum, WA",
        101
      ],
      [
        "3 Miles SE from Balch Camp, CA",
        99
      ],
      [
        "15 Miles NE from Drummond, MT",
        95
      ],
      [
        "10 Miles NW from Hoodsport, WA",
        92
      ],
      [
        "2 Miles W from North Rim, AZ",
        92
      ]
    ],
    "example": "31 miles SSW of Odessa, TX."
  },
  "attr_IncidentTypeCategory": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 12,
    "top_values": [
      [
        "WF",
        50210
      ],
      [
        "RX",
        1274
      ],
      [
        "CX",
        122
      ],
      [
        "DF",
        27
      ],
      [
        "SU",
        26
      ],
      [
        "OR",
        15
      ],
      [
        "FA",
        11
      ]
    ],
    "example": "WF"
  },
  "attr_IncidentTypeKind": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 3,
    "top_values": [
      [
        "FI",
        51523
      ],
      [
        "FM",
        177
      ],
      [
        "AP",
        1
      ]
    ],
    "example": "FI"
  },
  "attr_InitialLatitude": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 46891,
    "null_count": 4810,
    "null_pct": 9.3,
    "kind": "numeric",
    "mean": 42.265,
    "median": 43.029,
    "min": 0.0,
    "max": 94.238,
    "std": 8.449
  },
  "attr_InitialLongitude": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 46891,
    "null_count": 4810,
    "null_pct": 9.3,
    "kind": "numeric",
    "mean": -111.147,
    "median": -113.398,
    "min": -166.545,
    "max": 0.0,
    "std": 16.552
  },
  "attr_InitialResponseAcres": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 913,
    "null_count": 50788,
    "null_pct": 98.2,
    "kind": "numeric",
    "mean": 81.8,
    "median": 0.75,
    "min": 0.01,
    "max": 10000.0,
    "std": 449.631
  },
  "attr_InitialResponseDateTime": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 14632,
    "null_count": 37069,
    "null_pct": 71.7,
    "kind": "datetime",
    "min": "2020-01-01 21:40:00",
    "max": "2026-04-13 00:00:00"
  },
  "attr_IrwinID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 34436,
    "null_count": 17265,
    "null_pct": 33.4,
    "kind": "categorical",
    "unique": 14475,
    "top_values": [
      [
        "{569FB7BD-BA9B-4706-9D42-F05C7C6AC148}",
        110
      ],
      [
        "{348293DC-93BF-4330-A563-5A9B0EBEDA94}",
        103
      ],
      [
        "{68B988A1-C190-4F0C-9BEA-A658D389D167}",
        99
      ],
      [
        "{EC1EC492-0C76-4B92-8960-D18A13405F1C}",
        98
      ],
      [
        "{531B9F1B-1B36-4B91-8E63-2AADA4881DEB}",
        97
      ],
      [
        "{03FE65C0-435C-4116-A78E-AFEFE1ADC9A7}",
        95
      ],
      [
        "{28E947BF-29D5-4F8D-8EEB-8F6D51448B31}",
        95
      ]
    ],
    "example": "{9BFB4CDC-2EFE-4CD7-AA7E-ADCE3F402EA6}"
  },
  "attr_IsFireCauseInvestigated": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 7192,
    "null_count": 44509,
    "null_pct": 86.1,
    "kind": "numeric",
    "mean": 0.7,
    "median": 1.0,
    "min": 0.0,
    "max": 1.0,
    "std": 0.458
  },
  "attr_IsFireCodeRequested": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 34436,
    "null_count": 17265,
    "null_pct": 33.4,
    "kind": "numeric",
    "mean": 0.0,
    "median": 0.0,
    "min": 0.0,
    "max": 1.0,
    "std": 0.013
  },
  "attr_IsFSAssisted": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 39511,
    "null_count": 12190,
    "null_pct": 23.6,
    "kind": "numeric",
    "mean": 0.863,
    "median": 1.0,
    "min": 0.0,
    "max": 1.0,
    "std": 0.344
  },
  "attr_IsMultiJurisdictional": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 4499,
    "null_count": 47202,
    "null_pct": 91.3,
    "kind": "numeric",
    "mean": 0.326,
    "median": 0.0,
    "min": 0.0,
    "max": 1.0,
    "std": 0.469
  },
  "attr_IsReimbursable": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 5414,
    "null_count": 46287,
    "null_pct": 89.5,
    "kind": "numeric",
    "mean": 0.466,
    "median": 0.0,
    "min": 0.0,
    "max": 1.0,
    "std": 0.499
  },
  "attr_IsTrespass": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 16759,
    "null_count": 34942,
    "null_pct": 67.6,
    "kind": "numeric",
    "mean": 0.19,
    "median": 0.0,
    "min": 0.0,
    "max": 1.0,
    "std": 0.392
  },
  "attr_IsUnifiedCommand": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 20398,
    "null_count": 31303,
    "null_pct": 60.5,
    "kind": "numeric",
    "mean": 0.082,
    "median": 0.0,
    "min": 0.0,
    "max": 1.0,
    "std": 0.274
  },
  "attr_LocalIncidentIdentifier": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 13676,
    "top_values": [
      [
        "000088",
        139
      ],
      [
        "000262",
        130
      ],
      [
        "000178",
        130
      ],
      [
        "000173",
        127
      ],
      [
        "000028",
        120
      ],
      [
        "000797",
        117
      ],
      [
        "000683",
        114
      ]
    ],
    "example": "000020"
  },
  "attr_ModifiedBySystem": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 20,
    "top_values": [
      [
        "wildcade",
        13408
      ],
      [
        "INFORM_Inspector",
        12237
      ],
      [
        "ics209",
        11984
      ],
      [
        "firesponse",
        3121
      ],
      [
        "wildcad",
        2994
      ],
      [
        "wfdss",
        2602
      ],
      [
        "firecode",
        1525
      ]
    ],
    "example": "INFORM_Inspector"
  },
  "attr_PercentContained": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 20004,
    "null_count": 31697,
    "null_pct": 61.3,
    "kind": "numeric",
    "mean": 36.721,
    "median": 20.0,
    "min": 0.0,
    "max": 100.0,
    "std": 39.754
  },
  "attr_PercentPerimToBeContained": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 16530,
    "null_count": 35171,
    "null_pct": 68.0,
    "kind": "numeric",
    "mean": 85.73,
    "median": 100.0,
    "min": 0.0,
    "max": 100.0,
    "std": 34.142
  },
  "attr_POOCity": {
    "dtype": "object",
    "count": 51701,
    "non_null": 10914,
    "null_count": 40787,
    "null_pct": 78.9,
    "kind": "categorical",
    "unique": 1528,
    "top_values": [
      [
        "Oakridge",
        237
      ],
      [
        "Burns",
        139
      ],
      [
        "Orleans",
        115
      ],
      [
        "Cascade, ID",
        112
      ],
      [
        "PLAIN",
        111
      ],
      [
        "Stanley, ID",
        110
      ],
      [
        "Hungry Horse",
        110
      ]
    ],
    "example": "Crane"
  },
  "attr_POOCounty": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51699,
    "null_count": 2,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 1078,
    "top_values": [
      [
        "Yukon-Koyukuk",
        1467
      ],
      [
        "Lane",
        1348
      ],
      [
        "Douglas",
        1096
      ],
      [
        "Siskiyou",
        680
      ],
      [
        "Lake",
        671
      ],
      [
        "Stevens",
        606
      ],
      [
        "Grant",
        581
      ]
    ],
    "example": "Morrison"
  },
  "attr_POODispatchCenterID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51699,
    "null_count": 2,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 160,
    "top_values": [
      [
        "TXTIC",
        3604
      ],
      [
        "MNMNCC",
        2348
      ],
      [
        "WIWIC",
        1767
      ],
      [
        "WANEC",
        1608
      ],
      [
        "AKYFDC",
        1441
      ],
      [
        "WACWC",
        1301
      ],
      [
        "ORRICC",
        1200
      ]
    ],
    "example": "MNMNCC"
  },
  "attr_POOFips": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51698,
    "null_count": 3,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 1451,
    "top_values": [
      [
        "02290",
        1467
      ],
      [
        "41039",
        1348
      ],
      [
        "41019",
        927
      ],
      [
        "06093",
        680
      ],
      [
        "53065",
        597
      ],
      [
        "04005",
        561
      ],
      [
        "53063",
        551
      ]
    ],
    "example": "27097"
  },
  "attr_POOJurisdictionalAgency": {
    "dtype": "object",
    "count": 51701,
    "non_null": 37596,
    "null_count": 14105,
    "null_pct": 27.3,
    "kind": "categorical",
    "unique": 54,
    "top_values": [
      [
        "USFS",
        17446
      ],
      [
        "BLM",
        5108
      ],
      [
        "BIA",
        2991
      ],
      [
        "DNR",
        2560
      ],
      [
        "SFS",
        2269
      ],
      [
        "NPS",
        2171
      ],
      [
        "State",
        1394
      ]
    ],
    "example": "DVF"
  },
  "attr_POOJurisdictionalUnit": {
    "dtype": "object",
    "count": 51701,
    "non_null": 37578,
    "null_count": 14123,
    "null_pct": 27.3,
    "kind": "categorical",
    "unique": 916,
    "top_values": [
      [
        "TXTXS",
        3178
      ],
      [
        "AKDNS",
        1504
      ],
      [
        "ORUPF",
        984
      ],
      [
        "ORWIF",
        878
      ],
      [
        "CASRF",
        858
      ],
      [
        "MSMNF",
        750
      ],
      [
        "IDBOF",
        638
      ]
    ],
    "example": "KYKYS"
  },
  "attr_POOJurisdictUnitParentUnit": {
    "dtype": "object",
    "count": 51701,
    "non_null": 0,
    "null_count": 51701,
    "null_pct": 100.0,
    "kind": "categorical",
    "unique": 0,
    "top_values": [],
    "example": null
  },
  "attr_POOLandownerCategory": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51651,
    "null_count": 50,
    "null_pct": 0.1,
    "kind": "categorical",
    "unique": 16,
    "top_values": [
      [
        "Private",
        18735
      ],
      [
        "USFS",
        17156
      ],
      [
        "BLM",
        4983
      ],
      [
        "State",
        3125
      ],
      [
        "BIA",
        2656
      ],
      [
        "NPS",
        2136
      ],
      [
        "USFWS",
        1194
      ]
    ],
    "example": "Private"
  },
  "attr_POOLandownerKind": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51615,
    "null_count": 86,
    "null_pct": 0.2,
    "kind": "categorical",
    "unique": 6,
    "top_values": [
      [
        "Federal",
        28670
      ],
      [
        "Private",
        19083
      ],
      [
        "Other",
        3812
      ],
      [
        "State",
        33
      ],
      [
        "Local",
        12
      ],
      [
        "Soverei",
        5
      ]
    ],
    "example": "Private"
  },
  "attr_POOLegalDescPrincipalMerid": {
    "dtype": "object",
    "count": 51701,
    "non_null": 3457,
    "null_count": 48244,
    "null_pct": 93.3,
    "kind": "categorical",
    "unique": 22,
    "top_values": [
      [
        "Willamette",
        1365
      ],
      [
        "Mount Diablo",
        294
      ],
      [
        "Humboldt",
        249
      ],
      [
        "6th Principal Meridian",
        247
      ],
      [
        "Washington",
        216
      ],
      [
        "New Mexico",
        186
      ],
      [
        "Mt. Diablo",
        186
      ]
    ],
    "example": "6th Principal Meridian"
  },
  "attr_POOLegalDescQtr": {
    "dtype": "object",
    "count": 51701,
    "non_null": 624,
    "null_count": 51077,
    "null_pct": 98.8,
    "kind": "categorical",
    "unique": 4,
    "top_values": [
      [
        "SW",
        365
      ],
      [
        "SE",
        110
      ],
      [
        "NE",
        105
      ],
      [
        "NW",
        44
      ]
    ],
    "example": "SW"
  },
  "attr_POOLegalDescQtrQtr": {
    "dtype": "object",
    "count": 51701,
    "non_null": 607,
    "null_count": 51094,
    "null_pct": 98.8,
    "kind": "categorical",
    "unique": 4,
    "top_values": [
      [
        "SW",
        283
      ],
      [
        "SE",
        131
      ],
      [
        "NW",
        110
      ],
      [
        "NE",
        83
      ]
    ],
    "example": "NW"
  },
  "attr_POOLegalDescRange": {
    "dtype": "object",
    "count": 51701,
    "non_null": 3351,
    "null_count": 48350,
    "null_pct": 93.5,
    "kind": "categorical",
    "unique": 132,
    "top_values": [
      [
        "18",
        213
      ],
      [
        "2E",
        166
      ],
      [
        "2W",
        118
      ],
      [
        "12E",
        117
      ],
      [
        "27E",
        114
      ],
      [
        "39",
        109
      ],
      [
        "5E",
        106
      ]
    ],
    "example": "17"
  },
  "attr_POOLegalDescSection": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 3351,
    "null_count": 48350,
    "null_pct": 93.5,
    "kind": "numeric",
    "mean": 18.165,
    "median": 18.0,
    "min": 1.0,
    "max": 36.0,
    "std": 10.295
  },
  "attr_POOLegalDescTownship": {
    "dtype": "object",
    "count": 51701,
    "non_null": 3351,
    "null_count": 48350,
    "null_pct": 93.5,
    "kind": "categorical",
    "unique": 128,
    "top_values": [
      [
        "30",
        146
      ],
      [
        "26",
        137
      ],
      [
        "23N",
        121
      ],
      [
        "12S",
        117
      ],
      [
        "18S",
        107
      ],
      [
        "14N",
        104
      ],
      [
        "39",
        101
      ]
    ],
    "example": "11"
  },
  "attr_POOPredictiveServiceAreaID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 34433,
    "null_count": 17268,
    "null_pct": 33.4,
    "kind": "categorical",
    "unique": 234,
    "top_values": [
      [
        "NW04",
        2154
      ],
      [
        "NC04",
        1493
      ],
      [
        "SA12",
        1247
      ],
      [
        "EA05",
        846
      ],
      [
        "NW06",
        774
      ],
      [
        "SA07",
        758
      ],
      [
        "AK01W",
        746
      ]
    ],
    "example": "EA03"
  },
  "attr_POOProtectingAgency": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51655,
    "null_count": 46,
    "null_pct": 0.1,
    "kind": "categorical",
    "unique": 44,
    "top_values": [
      [
        "USFS",
        18763
      ],
      [
        "BLM",
        7191
      ],
      [
        "DNR",
        5794
      ],
      [
        "SFS",
        3791
      ],
      [
        "BIA",
        3096
      ],
      [
        "C&L",
        2636
      ],
      [
        "NPS",
        2189
      ]
    ],
    "example": "DNR"
  },
  "attr_POOProtectingUnit": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 997,
    "top_values": [
      [
        "TXTXS",
        3235
      ],
      [
        "WIWIS",
        1490
      ],
      [
        "WANES",
        1441
      ],
      [
        "ORUPF",
        984
      ],
      [
        "ORWIF",
        871
      ],
      [
        "CASRF",
        867
      ],
      [
        "MOMTF",
        865
      ]
    ],
    "example": "MN3VS"
  },
  "attr_POOState": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 55,
    "top_values": [
      [
        "US-OR",
        6094
      ],
      [
        "US-CA",
        4728
      ],
      [
        "US-WA",
        4087
      ],
      [
        "US-TX",
        3626
      ],
      [
        "US-ID",
        3522
      ],
      [
        "US-AK",
        3320
      ],
      [
        "US-MT",
        2934
      ]
    ],
    "example": "US-MN"
  },
  "attr_PredominantFuelGroup": {
    "dtype": "object",
    "count": 51701,
    "non_null": 15689,
    "null_count": 36012,
    "null_pct": 69.7,
    "kind": "categorical",
    "unique": 6,
    "top_values": [
      [
        "Timber",
        6070
      ],
      [
        "Grass",
        4326
      ],
      [
        "Grass-Shrub",
        3498
      ],
      [
        "Brush",
        1493
      ],
      [
        "Slash",
        236
      ],
      [
        "Nonburnable",
        66
      ]
    ],
    "example": "Grass"
  },
  "attr_PredominantFuelModel": {
    "dtype": "object",
    "count": 51701,
    "non_null": 14998,
    "null_count": 36703,
    "null_pct": 71.0,
    "kind": "categorical",
    "unique": 44,
    "top_values": [
      [
        "GS2",
        2228
      ],
      [
        "GR2",
        1735
      ],
      [
        "GR1",
        1102
      ],
      [
        "TL6",
        923
      ],
      [
        "GS1",
        779
      ],
      [
        "TU5",
        664
      ],
      [
        "TU2",
        636
      ]
    ],
    "example": "TL6"
  },
  "attr_PrimaryFuelModel": {
    "dtype": "object",
    "count": 51701,
    "non_null": 18007,
    "null_count": 33694,
    "null_pct": 65.2,
    "kind": "categorical",
    "unique": 13,
    "top_values": [
      [
        "Timber (Litter and Understory)",
        6443
      ],
      [
        "Timber (Grass and Understory)",
        3974
      ],
      [
        "Short Grass (1 foot)",
        1920
      ],
      [
        "Brush (2 feet)",
        1620
      ],
      [
        "Tall Grass (2.5 feet)",
        1589
      ],
      [
        "Hardwood Litter",
        752
      ],
      [
        "Closed Timber Litter",
        416
      ]
    ],
    "example": "Short Grass (1 foot)"
  },
  "attr_SecondaryFuelModel": {
    "dtype": "object",
    "count": 51701,
    "non_null": 12648,
    "null_count": 39053,
    "null_pct": 75.5,
    "kind": "categorical",
    "unique": 13,
    "top_values": [
      [
        "Brush (2 feet)",
        3902
      ],
      [
        "Timber (Litter and Understory)",
        1855
      ],
      [
        "Timber (Grass and Understory)",
        1452
      ],
      [
        "Closed Timber Litter",
        1282
      ],
      [
        "Tall Grass (2.5 feet)",
        1174
      ],
      [
        "Short Grass (1 foot)",
        998
      ],
      [
        "Chaparral (6 feet)",
        577
      ]
    ],
    "example": "Short Grass (1 foot)"
  },
  "attr_TotalIncidentPersonnel": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 13929,
    "null_count": 37772,
    "null_pct": 73.1,
    "kind": "numeric",
    "mean": 411.228,
    "median": 198.0,
    "min": 0.0,
    "max": 6627.0,
    "std": 648.091
  },
  "attr_UniqueFireIdentifier": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 29359,
    "top_values": [
      [
        "2025-WAOWF-000797",
        111
      ],
      [
        "2025-WAOWF-000795",
        104
      ],
      [
        "2025-CASNF-001684",
        100
      ],
      [
        "2025-AZGCP-000597",
        98
      ],
      [
        "2023-CASRF-000939",
        98
      ],
      [
        "2024-WASES-000173",
        95
      ],
      [
        "2024-OR771S-000028",
        95
      ]
    ],
    "example": "2023-MN3VS-000020"
  },
  "attr_FORID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 17423,
    "null_count": 34278,
    "null_pct": 66.3,
    "kind": "categorical",
    "unique": 17348,
    "top_values": [
      [
        "{6F278C1A-C0BF-4133-BFCE-FCFDBD9DDC44}",
        14
      ],
      [
        "{D1157634-2681-4004-98D1-7CED5DC9B0D8}",
        7
      ],
      [
        "{F047399F-588C-4EBD-9076-6730D9570310}",
        4
      ],
      [
        "{59AE4694-F8E2-4259-A54F-450315058107}",
        3
      ],
      [
        "{D5AB1F34-7524-49E8-82B6-A81BE688CD59}",
        3
      ],
      [
        "{61454FD6-B369-498C-92FE-BA478217F6D5}",
        3
      ],
      [
        "{6B163292-F2FA-4FB5-98BD-138BCDD8F877}",
        3
      ]
    ],
    "example": "{0078E575-DB71-4068-9BE1-8D49F3E3FF16}"
  },
  "attr_WFDSSDecisionStatus": {
    "dtype": "object",
    "count": 51701,
    "non_null": 34436,
    "null_count": 17265,
    "null_pct": 33.4,
    "kind": "categorical",
    "unique": 3,
    "top_values": [
      [
        "No Decision",
        25735
      ],
      [
        "Approved Decision",
        8035
      ],
      [
        "Pending Decision",
        666
      ]
    ],
    "example": "No Decision"
  },
  "attr_EstimatedFinalCost": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 8051,
    "null_count": 43650,
    "null_pct": 84.4,
    "kind": "numeric",
    "mean": 22408757.916,
    "median": 10000000.0,
    "min": 1.0,
    "max": 400000000.0,
    "std": 30609371.244
  },
  "attr_OrganizationalAssessment": {
    "dtype": "object",
    "count": 51701,
    "non_null": 8739,
    "null_count": 42962,
    "null_pct": 83.1,
    "kind": "categorical",
    "unique": 9,
    "top_values": [
      [
        "Complex Incident Manageme",
        3704
      ],
      [
        "Type 3 Team",
        1645
      ],
      [
        "Type 3 Incident",
        954
      ],
      [
        "Type 2 Incident",
        894
      ],
      [
        "Type 1 Incident",
        578
      ],
      [
        "Type 4 IC",
        510
      ],
      [
        "Type 4 Incident",
        335
      ]
    ],
    "example": "Type 4 Incident"
  },
  "attr_StratDecisionPublishDate": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 8051,
    "null_count": 43650,
    "null_pct": 84.4,
    "kind": "datetime",
    "min": "2020-09-01 17:24:16",
    "max": "2026-04-13 16:42:29"
  },
  "attr_CreatedOnDateTime_dt": {
    "dtype": "int64",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "datetime",
    "min": "2018-08-03 12:10:44",
    "max": "2026-04-13 17:31:00"
  },
  "attr_ModifiedOnDateTime_dt": {
    "dtype": "int64",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "datetime",
    "min": "2020-03-12 17:53:17",
    "max": "2026-04-13 17:34:48"
  },
  "attr_Source": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 2,
    "top_values": [
      [
        "IRWIN",
        34311
      ],
      [
        "FODR",
        17390
      ]
    ],
    "example": "IRWIN"
  },
  "attr_ActiveFireCandidate": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 39878,
    "null_count": 11823,
    "null_pct": 22.9,
    "kind": "numeric",
    "mean": 0.588,
    "median": 1.0,
    "min": 0.0,
    "max": 1.0,
    "std": 0.492
  },
  "attr_IsCpxChild": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 39878,
    "null_count": 11823,
    "null_pct": 22.9,
    "kind": "numeric",
    "mean": 0.082,
    "median": 0.0,
    "min": 0.0,
    "max": 1.0,
    "std": 0.274
  },
  "attr_CpxName": {
    "dtype": "object",
    "count": 51701,
    "non_null": 3331,
    "null_count": 48370,
    "null_pct": 93.6,
    "kind": "categorical",
    "unique": 56,
    "top_values": [
      [
        "Willamette Complex",
        373
      ],
      [
        "2023 SRF Lightning Complex",
        356
      ],
      [
        "Homestead Complex",
        348
      ],
      [
        "Diamond Complex",
        301
      ],
      [
        "HAPPY CAMP COMPLEX",
        241
      ],
      [
        "Smith River Complex",
        241
      ],
      [
        "MIDDLE FORK COMPLEX",
        126
      ]
    ],
    "example": "Adams Robles Complex"
  },
  "attr_CpxID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 3331,
    "null_count": 48370,
    "null_pct": 93.6,
    "kind": "categorical",
    "unique": 53,
    "top_values": [
      [
        "{3635F556-9534-4B8E-9212-83B5C69331AB}",
        373
      ],
      [
        "{16890FB5-5004-4114-B056-1760AD7EB6C1}",
        356
      ],
      [
        "{EE1E476B-83D0-425D-B068-E09B39C50411}",
        348
      ],
      [
        "{E351D4B9-7154-490C-9BCE-888DF5FF90A4}",
        301
      ],
      [
        "{5CA009DC-D74B-419E-A2E9-0F6231B6191C}",
        241
      ],
      [
        "{3BB45524-295D-4F64-8BCB-C0B6DCBC0376}",
        241
      ],
      [
        "{28E674F9-7211-4662-8301-EC0BEF589614}",
        126
      ]
    ],
    "example": "{4B013923-7E24-43FA-BFFC-200A0DDCB9CD}"
  },
  "attr_SourceGlobalID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 31897,
    "top_values": [
      [
        "{DFDF4CB6-3715-4047-9BDD-3AC0EBF761EE}",
        110
      ],
      [
        "{CBE2916A-0CB1-43FB-90B8-ED1E4CC4054D}",
        103
      ],
      [
        "{23EBEFA4-09A7-4245-9CC9-CCBAFE496D5D}",
        99
      ],
      [
        "{246880DC-649A-4DB4-A632-F3C3461C956F}",
        98
      ],
      [
        "{AD0701C9-EC74-4121-8146-0360B245BA99}",
        97
      ],
      [
        "{3F00E0CF-466A-477F-BD74-19B15F4D5B67}",
        95
      ],
      [
        "{1AB8973D-25C4-4082-B7E5-9A99002671A0}",
        95
      ]
    ],
    "example": "{4E165FEC-81F6-46DB-BC22-F2190F39E395}"
  },
  "GlobalID": {
    "dtype": "object",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "categorical",
    "unique": 51701,
    "top_values": [
      [
        "086e3634-6bcf-418d-b0ba-41696d170b6f",
        1
      ],
      [
        "06b084b7-cdfe-4c45-9186-0b9bad8c37d0",
        1
      ],
      [
        "c4bd0246-69d5-41f5-9a9c-1f686a9a9a99",
        1
      ],
      [
        "3e3c3619-3426-4565-bfb4-5e1c53ecb99b",
        1
      ],
      [
        "295fc1ab-e828-4e22-9f59-4b79000eb34a",
        1
      ],
      [
        "237f0608-f039-4168-8228-5e61b8c9600a",
        1
      ],
      [
        "3ca1758b-a738-41cc-befa-f3abae589dfd",
        1
      ]
    ],
    "example": "06b084b7-cdfe-4c45-9186-0b9bad8c37d0"
  },
  "Shape__Area": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 51700,
    "null_count": 1,
    "null_pct": 0.0,
    "kind": "numeric",
    "mean": 0.003,
    "median": 0.0,
    "min": 0.0,
    "max": 0.449,
    "std": 0.015
  },
  "Shape__Length": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 51700,
    "null_count": 1,
    "null_pct": 0.0,
    "kind": "numeric",
    "mean": 0.31,
    "median": 0.027,
    "min": 0.0,
    "max": 11.9,
    "std": 0.788
  },
  "BurnPeriod": {
    "dtype": "int32",
    "count": 51701,
    "non_null": 51701,
    "null_count": 0,
    "null_pct": 0.0,
    "kind": "numeric",
    "mean": 7.257,
    "median": 1.0,
    "min": 1.0,
    "max": 111.0,
    "std": 13.986
  },
  "AcreageChange": {
    "dtype": "float64",
    "count": 51701,
    "non_null": 3778,
    "null_count": 47923,
    "null_pct": 92.7,
    "kind": "numeric",
    "mean": 47231554.815,
    "median": 0.255,
    "min": -642695.938,
    "max": 178439663549.113,
    "std": 2903089454.36
  },
  "geometry": {
    "dtype": "geometry",
    "kind": "geometry"
  }
};