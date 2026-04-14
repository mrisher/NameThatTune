// Note: A test (SongCapacity.test.js) ensures there are always 30 days of songs.
// If the build fails, add more songs here!
const rawConnectunesSongs = [
  {
    "day": "2026-03-28",
    "songs": [
      {
        "songTitle": "U21vb3RoIENyaW1pbmFs",
        "artistName": "TWljaGFlbCBKYWNrc29u",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/7d/84/387d847b-0a17-d7d0-81fa-3d1e2036a0e3/mzaf_1148403634523455455.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3VwZXJzdGl0aW9u",
        "artistName": "U3RldmllIFdvbmRlcg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ff/a3/1a/ffa31a9f-8d91-68a8-e85c-cf8e74284079/mzaf_15951061299338017971.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FyZWxlc3MgV2hpc3Blcg==",
        "artistName": "R2VvcmdlIE1pY2hhZWw=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/14/5f/ea/145fea1b-d50b-2666-454d-e05eb53aa642/mzaf_4251657665952473516.plus.aac.p.m4a"
      },
      {
        "songTitle": "U21vb3RoIE9wZXJhdG9y",
        "artistName": "U2FkZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/7d/9a/50/7d9a50b9-75bd-c4c8-5c72-ac200a333474/mzaf_10550216675185697487.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-03-29",
    "songs": [
      {
        "songTitle": "VG90YWwgRWNsaXBzZSBvZiB0aGUgSGVhcnQ=",
        "artistName": "Qm9ubmllIFR5bGVy",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a5/94/8c/a5948c77-000c-e25b-8133-a36103ded80e/mzaf_14404435220764766921.plus.aac.p.m4a"
      },
      {
        "songTitle": "RG9uJ3QgR28gQnJlYWtpbmcgTXkgSGVhcnQ=",
        "artistName": "RWx0b24gSm9obg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/63/0b/6b/630b6bae-1f76-8567-b9c6-454fe10a2a2a/mzaf_1044028786089244604.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2F0ZXJsb28=",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/32/ca/2b/32ca2b0a-79a1-77ad-4746-07a83639d3ce/mzaf_9127813743185986422.plus.aac.p.m4a"
      },
      {
        "songTitle": "SSBXaWxsIFN1cnZpdmU=",
        "artistName": "R2xvcmlhIEdheW5vcg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/97/55/dd/9755dd8f-a332-4486-4946-c049059f0edf/mzaf_18336667409268238306.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-03-30",
    "songs": [
      {
        "songTitle": "VGltZSBBZnRlciBUaW1l",
        "artistName": "Q3luZGkgTGF1cGVy",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/02/bd/5e/02bd5e7c-8efe-9218-6c91-1c69c4c5c062/mzaf_23204011408983330.plus.aac.p.m4a"
      },
      {
        "songTitle": "T25lIE1vcmUgVGltZQ==",
        "artistName": "RGFmdCBQdW5r",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/98/96/f6/9896f638-8b47-3f76-c47e-19e43b53677c/mzaf_15900001332254520801.plus.aac.p.m4a"
      },
      {
        "songTitle": "R2V0IEx1Y2t5",
        "artistName": "RGFmdCBQdW5r",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d4/d3/1e/d4d31eb4-7405-b806-8346-3c52ad5b4cf4/mzaf_8095545455942962509.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2FrZSBNZSBVcCBCZWZvcmUgWW91IEdvLUdv",
        "artistName": "V2hhbSE=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/59/d0/df/59d0df1f-b9b0-c1f0-d27e-ad59ee9fe1fa/mzaf_15629855503092199047.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-03-31",
    "songs": [
      {
        "songTitle": "QnJvd24gRXllZCBHaXJs",
        "artistName": "VmFuIE1vcnJpc29u",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/02/f0/e5/02f0e5e5-7a0a-407f-6125-0faee3fa57fd/mzaf_2431451593080933868.plus.aac.p.m4a"
      },
      {
        "songTitle": "TWF0ZXJpYWwgR2lybA==",
        "artistName": "TWFkb25uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f5/5b/51/f55b512a-9d2d-c3cf-e78a-2c2187393dba/mzaf_4554099718140384374.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmVzcGVjdA==",
        "artistName": "QXJldGhhIEZyYW5rbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/ee/3d/73/ee3d7366-bdcb-1370-a807-e9a138345974/mzaf_8633168135836320660.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3VwZXIgRnJlYWs=",
        "artistName": "UmljayBKYW1lcw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/0b/61/940b6164-7f98-2f03-1a33-b06202af2902/mzaf_4976900656249650660.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-01",
    "songs": [
      {
        "songTitle": "RXZlcnlib2R5IFdhbnRzIHRvIFJ1bGUgdGhlIFdvcmxk",
        "artistName": "VGVhcnMgZm9yIEZlYXJz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/56/65/5f/56655f64-f26f-3a21-b2c8-c78f1c9a0a20/mzaf_11752705800252350393.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2UgQXJlIHRoZSBXb3JsZA==",
        "artistName": "VVNBIGZvciBBZnJpY2E=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7f/d8/4b/7fd84bad-f49b-c516-799c-80746ec291ff/mzaf_10847887636031808951.plus.aac.p.m4a"
      },
      {
        "songTitle": "RG9uJ3QgU3RvcCBCZWxpZXZpbic=",
        "artistName": "Sm91cm5leQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/5c/72/97/5c72974f-6022-f760-ad82-35964fb636b5/mzaf_12752096049347330756.plus.aac.p.m4a"
      },
      {
        "songTitle": "TGl2aW4nIG9uIGEgUHJheWVy",
        "artistName": "Qm9uIEpvdmk=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fc/64/6c/fc646cf8-6322-09d6-c6b7-0cd148f6a47f/mzaf_14973517811432335325.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-02",
    "songs": [
      {
        "songTitle": "U3Rvcnkgb2YgTXkgTGlmZQ==",
        "artistName": "T25lIERpcmVjdGlvbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f5/3b/6a/f53b6ae3-5b87-8fff-d1c3-2c03f10203d6/mzaf_2853177518389348916.plus.aac.p.m4a"
      },
      {
        "songTitle": "QnJpbmcgTWUgVG8gTGlmZQ==",
        "artistName": "RXZhbmVzY2VuY2U=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3e/34/c4/3e34c400-9ad9-3859-6988-496c27728be4/mzaf_14936938522678789093.plus.aac.p.m4a"
      },
      {
        "songTitle": "TXIuIEJyaWdodHNpZGU=",
        "artistName": "VGhlIEtpbGxlcnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b3/95/6e/b3956e14-35f0-937e-afb0-72774d3f613f/mzaf_8359343604382181711.plus.aac.p.m4a"
      },
      {
        "songTitle": "SSBXcml0ZSBTaW5zIE5vdCBUcmFnZWRpZXM=",
        "artistName": "UGFuaWMhIEF0IFRoZSBEaXNjbw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b5/40/1b/b5401b15-5f12-5991-ff63-0bbbf0a02dfb/mzaf_18011468795378839226.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-03",
    "songs": [
      {
        "songTitle": "RXllIG9mIHRoZSBUaWdlcg==",
        "artistName": "U3Vydml2b3I=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fe/fa/9e/fefa9edd-c023-4d1c-1012-08bfb0ec69e6/mzaf_4651653238471209843.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q290dG9uIEV5ZSBKb2U=",
        "artistName": "UmVkbmV4",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ed/53/22/ed53229c-92a5-4cd4-ab2e-5165b2b18cec/mzaf_7615928454011112758.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3dlZXQgSG9tZSBBbGFiYW1h",
        "artistName": "THlueXJkIFNreW55cmQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/67/9e/19679e49-2dcb-c44f-2244-391bb4fb7e1d/mzaf_10147574816943411315.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3VtbWVyIG9mICc2OQ==",
        "artistName": "QnJ5YW4gQWRhbXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a7/3e/b2/a73eb26b-db02-90f3-0ac6-d0a3170fa876/mzaf_14223839568238436580.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-04",
    "songs": [
      {
        "songTitle": "SWNlIEljZSBCYWJ5",
        "artistName": "VmFuaWxsYSBJY2U=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/2d/9b/752d9b59-ccbe-922a-813d-af71d6bb304e/mzaf_14285687643105721523.plus.aac.p.m4a"
      },
      {
        "songTitle": "Li4uQmFieSBPbmUgTW9yZSBUaW1l",
        "artistName": "QnJpdG5leSBTcGVhcnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/49/6a/b2/496ab286-3c2d-91f9-2d83-2dc2d7d0ed39/mzaf_9080140052391941165.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2FubmFiZQ==",
        "artistName": "U3BpY2UgR2lybHM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/db/cb/c6/dbcbc688-8277-b365-8deb-1da3c30da079/mzaf_7842872759474974048.plus.aac.p.m4a"
      },
      {
        "songTitle": "SSBXYW50IEl0IFRoYXQgV2F5",
        "artistName": "QmFja3N0cmVldCBCb3lz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/cd/f8/12cdf81c-f174-cd45-9a56-9b2388df9e63/mzaf_2642298639219088626.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-05",
    "songs": [
      {
        "songTitle": "SnVzdCBEYW5jZQ==",
        "artistName": "TGFkeSBHYWdh",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/47/3b/65/473b6523-131c-4c73-f774-158c1abbc3eb/mzaf_16291488932735455549.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2UgdGhlIE5pZ2h0IEF3YXk=",
        "artistName": "VmFuIEhhbGVu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/72/8d/99/728d99a9-711a-a391-3edf-d16d418e670f/mzaf_16729255959701177088.plus.aac.p.m4a"
      },
      {
        "songTitle": "RmlyZXdvcms=",
        "artistName": "S2F0eSBQZXJyeQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ab/27/3b/ab273b22-1eb1-dd49-5332-5ef70c35683b/mzaf_4912325324633099647.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q0FOJ1QgU1RPUCBUSEUgRkVFTElORyE=",
        "artistName": "SnVzdGluIFRpbWJlcmxha2U=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/86/41/2d/86412d20-2f4d-39fc-221b-3f643d7c99c6/mzaf_9909715182585785919.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-06",
    "songs": [
      {
        "songTitle": "Qmx1ZSBTdWVkZSBTaG9lcw==",
        "artistName": "RWx2aXMgUHJlc2xleQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/7d/77/89/7d7789db-e241-6c1b-ea98-a9954e49564a/mzaf_17858068308235633419.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmVoaW5kIEJsdWUgRXllcw==",
        "artistName": "VGhlIFdobw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9a/f0/e9/9af0e9c0-fce1-bfb1-ab33-1b3e51fef975/mzaf_359946263263467398.plus.aac.p.m4a"
      },
      {
        "songTitle": "Qm9ybiB0byBSdW4=",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a8/b7/0a/a8b70ad0-b907-0360-99b1-5bf23bdc8322/mzaf_11319548672709322634.plus.aac.p.m4a"
      },
      {
        "songTitle": "Rm9ydHVuYXRlIFNvbg==",
        "artistName": "Q3JlZWRlbmNlIENsZWFyd2F0ZXIgUmV2aXZhbA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cf/7d/3e/cf7d3efd-8778-0811-3312-322881064541/mzaf_17554128918534037556.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-07",
    "songs": [
      {
        "songTitle": "Q3JhenkgVHJhaW4=",
        "artistName": "T3p6eSBPc2JvdXJuZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7a/81/d1/7a81d12e-3ecc-47bb-c0bb-3a8066382f26/mzaf_3983422307692904907.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q3JhenkgTGl0dGxlIFRoaW5nIENhbGxlZCBMb3Zl",
        "artistName": "UXVlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/3c/5f/2a3c5f44-1508-43f5-25a9-a7e78ba482b2/mzaf_16162944577579764154.plus.aac.p.m4a"
      },
      {
        "songTitle": "Qm9oZW1pYW4gUmhhcHNvZHk=",
        "artistName": "UXVlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8f/11/52/8f1152a9-fd5f-0021-f546-b97579c22ec3/mzaf_3962258993076347789.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW0gT24=",
        "artistName": "QWVyb3NtaXRo",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f8/96/43/f89643b7-3efa-9f43-0a78-394abf12864b/mzaf_3399344087154345151.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-08",
    "songs": [
      {
        "songTitle": "UmluZyBvZiBGaXJl",
        "artistName": "Sm9obm55IENhc2g=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2c/12/68/2c126894-fd6b-b37c-d556-6d91bd8c0875/mzaf_17832761364720403968.plus.aac.p.m4a"
      },
      {
        "songTitle": "R3JlYXQgQmFsbHMgb2YgRmlyZQ==",
        "artistName": "SmVycnkgTGVlIExld2lz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8b/d5/c4/8bd5c481-93ef-d969-af84-c8e28137d1de/mzaf_7429718246519633446.plus.aac.p.m4a"
      },
      {
        "songTitle": "Rm9sc29tIFByaXNvbiBCbHVlcw==",
        "artistName": "Sm9obm55IENhc2g=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9e/25/5d/9e255d48-9468-ffd8-98ec-1e28d85a98f3/mzaf_16092528148426862596.plus.aac.p.m4a"
      },
      {
        "songTitle": "SmFpbGhvdXNlIFJvY2s=",
        "artistName": "RWx2aXMgUHJlc2xleQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/08/34/eb/0834eb34-ae93-1ac0-163c-e5565d11fa72/mzaf_13523593686705880165.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-09",
    "songs": [
      {
        "songTitle": "U3dlZXQgQ2hpbGQgTycgTWluZQ==",
        "artistName": "R3VucyBOJyBSb3Nlcw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bc/fd/73/bcfd7312-9f1e-a1b0-524b-cbda6e0c1050/mzaf_248640128027576869.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3dlZXQgRW1vdGlvbg==",
        "artistName": "QWVyb3NtaXRo",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/06/76/98/06769814-8ca8-67d6-5112-ad7e0a36e1ac/mzaf_6681166353102422579.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2VsY29tZSB0byB0aGUgSnVuZ2xl",
        "artistName": "R3VucyBOJyBSb3Nlcw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/60/0d/c5/600dc586-7fcc-f435-26be-751ad11c7692/mzaf_4053810104755384420.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2FsayBUaGlzIFdheQ==",
        "artistName": "QWVyb3NtaXRo",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/30/40/8c/30408c39-c3ec-45ad-f9c9-e5ec43e3b3f5/mzaf_3274804949944387327.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-10",
    "songs": [
      {
        "songTitle": "QmxhY2sgSG9sZSBTdW4=",
        "artistName": "U291bmRnYXJkZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c3/7c/32/c37c32b4-b95d-1714-a205-4848458c0ba1/mzaf_7576631968114037271.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      },
      {
        "songTitle": "U21lbGxzIExpa2UgVGVlbiBTcGlyaXQ=",
        "artistName": "TmlydmFuYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a6/53/1e/a6531efa-397c-eb73-ecab-9b2790c1471e/mzaf_16440344883389407474.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q29tZSBBcyBZb3UgQXJl",
        "artistName": "TmlydmFuYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f4/3e/86/f43e8664-bdd9-bc56-8d2b-76064c865920/mzaf_15456055651529260945.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-11",
    "songs": [
      {
        "songTitle": "R29vZCBWaWJyYXRpb25z",
        "artistName": "VGhlIEJlYWNoIEJveXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/19/81/d4/1981d49b-0843-2b4c-7ead-752489a1b401/mzaf_16571628849823631950.plus.aac.p.m4a"
      },
      {
        "songTitle": "R29vZCBUaW1lcyBCYWQgVGltZXM=",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/13/d2/85/13d2852d-5562-930c-6067-bc6cfb4c2233/mzaf_16176730149296629814.plus.aac.p.m4a"
      },
      {
        "songTitle": "R29kIE9ubHkgS25vd3M=",
        "artistName": "VGhlIEJlYWNoIEJveXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a6/d0/40/a6d040a3-40f1-c2cf-c6c1-3e9fd3f484aa/mzaf_11838690916794001351.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hvbGUgTG90dGEgTG92ZQ==",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/19/76/cf/1976cf63-83e6-bc9e-1b9d-c8e0e7a5eac7/mzaf_15169984811349098837.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-12",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-13",
    "songs": [
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-14",
    "songs": [
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-15",
    "songs": [
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-16",
    "songs": [
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-17",
    "songs": [
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-18",
    "songs": [
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-19",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2UgRm91bmQgTG92ZSAoZmVhdC4gQ2FsdmluIEhhcnJpcyk=",
        "artistName": "UmloYW5uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/4e/9f/814e9f54-e7f8-3ab1-d92e-c7869efbd376/mzaf_9149255715038044431.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-20",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-21",
    "songs": [
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-22",
    "songs": [
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-23",
    "songs": [
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-24",
    "songs": [
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-25",
    "songs": [
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-26",
    "songs": [
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-27",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2UgRm91bmQgTG92ZSAoZmVhdC4gQ2FsdmluIEhhcnJpcyk=",
        "artistName": "UmloYW5uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/4e/9f/814e9f54-e7f8-3ab1-d92e-c7869efbd376/mzaf_9149255715038044431.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-28",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-29",
    "songs": [
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-04-30",
    "songs": [
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-01",
    "songs": [
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-02",
    "songs": [
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-03",
    "songs": [
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-04",
    "songs": [
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-05",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2UgRm91bmQgTG92ZSAoZmVhdC4gQ2FsdmluIEhhcnJpcyk=",
        "artistName": "UmloYW5uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/4e/9f/814e9f54-e7f8-3ab1-d92e-c7869efbd376/mzaf_9149255715038044431.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-06",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-07",
    "songs": [
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-08",
    "songs": [
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-09",
    "songs": [
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-10",
    "songs": [
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-11",
    "songs": [
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-12",
    "songs": [
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-13",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2UgRm91bmQgTG92ZSAoZmVhdC4gQ2FsdmluIEhhcnJpcyk=",
        "artistName": "UmloYW5uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/4e/9f/814e9f54-e7f8-3ab1-d92e-c7869efbd376/mzaf_9149255715038044431.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-14",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-15",
    "songs": [
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-16",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-17",
    "songs": [
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-18",
    "songs": [
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-19",
    "songs": [
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-20",
    "songs": [
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-21",
    "songs": [
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-22",
    "songs": [
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2UgRm91bmQgTG92ZSAoZmVhdC4gQ2FsdmluIEhhcnJpcyk=",
        "artistName": "UmloYW5uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/4e/9f/814e9f54-e7f8-3ab1-d92e-c7869efbd376/mzaf_9149255715038044431.plus.aac.p.m4a"
      },
      {
        "songTitle": "Um9ja2V0IE1hbg==",
        "artistName": "RWx0b24gSm9obg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/09/33/33/09333333-3333-3333-3333-333333333333/mzaf_1354444444444444444.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-23",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGFrZSBNZSBIb21lLCBDb3VudHJ5IFJvYWRz",
        "artistName": "Sm9obiBEZW52ZXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ed/e9/47/ede9473f-3334-29c4-21f5-dcd3aa3c029e/mzaf_8295710681386150675.plus.aac.p.m4a"
      },
      {
        "songTitle": "R28gWW91ciBPd24gV2F5",
        "artistName": "RmxlZXR3b29kIE1hYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/81/1b/0e/811b0e3a-2693-9934-9994-999499949994/mzaf_1354444444444444444.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-24",
    "songs": [
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW1z",
        "artistName": "RmxlZXR3b29kIE1hYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7e/8e/8e/7e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e/mzaf_1354444444444444444.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3dlZXQgQ2Fyb2xpbmU=",
        "artistName": "TmVpbCBEaWFtb25k",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0c/66/66/0c666666-6666-6666-6666-666666666666/mzaf_1354444444444444444.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-25",
    "songs": [
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-26",
    "songs": [
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-27",
    "songs": [
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-28",
    "songs": [
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-29",
    "songs": [
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-30",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-05-31",
    "songs": [
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2UgRm91bmQgTG92ZSAoZmVhdC4gQ2FsdmluIEhhcnJpcyk=",
        "artistName": "UmloYW5uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/4e/9f/814e9f54-e7f8-3ab1-d92e-c7869efbd376/mzaf_9149255715038044431.plus.aac.p.m4a"
      },
      {
        "songTitle": "Um9ja2V0IE1hbg==",
        "artistName": "RWx0b24gSm9obg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/09/33/33/09333333-3333-3333-3333-333333333333/mzaf_1354444444444444444.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-01",
    "songs": [
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGFrZSBNZSBIb21lLCBDb3VudHJ5IFJvYWRz",
        "artistName": "Sm9obiBEZW52ZXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ed/e9/47/ede9473f-3334-29c4-21f5-dcd3aa3c029e/mzaf_8295710681386150675.plus.aac.p.m4a"
      },
      {
        "songTitle": "R28gWW91ciBPd24gV2F5",
        "artistName": "RmxlZXR3b29kIE1hYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/81/1b/0e/811b0e3a-2693-9934-9994-999499949994/mzaf_1354444444444444444.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-02",
    "songs": [
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW1z",
        "artistName": "RmxlZXR3b29kIE1hYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7e/8e/8e/7e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e/mzaf_1354444444444444444.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3dlZXQgQ2Fyb2xpbmU=",
        "artistName": "TmVpbCBEaWFtb25k",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0c/66/66/0c666666-6666-6666-6666-666666666666/mzaf_1354444444444444444.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-03",
    "songs": [
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-04",
    "songs": [
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-05",
    "songs": [
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-06",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-07",
    "songs": [
      {
        "songTitle": "U3BhY2UgT2RkaXR5",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3BhY2UgQ293Ym95",
        "artistName": "SmFtaXJvcXVhaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-08",
    "songs": [
      {
        "songTitle": "UHVycGxlIFJhaW4=",
        "artistName": "UHJpbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHVycGxlIEhhemU=",
        "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-09",
    "songs": [
      {
        "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
        "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2luZyBRdWVlbg==",
        "artistName": "QUJCQQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2UgRm91bmQgTG92ZSAoZmVhdC4gQ2FsdmluIEhhcnJpcyk=",
        "artistName": "UmloYW5uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/4e/9f/814e9f54-e7f8-3ab1-d92e-c7869efbd376/mzaf_9149255715038044431.plus.aac.p.m4a"
      },
      {
        "songTitle": "Um9ja2V0IE1hbg==",
        "artistName": "RWx0b24gSm9obg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/09/33/33/09333333-3333-3333-3333-333333333333/mzaf_1354444444444444444.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-10",
    "songs": [
      {
        "songTitle": "QmxhY2sgRG9n",
        "artistName": "TGVkIFplcHBlbGlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGFpbnQgSXQsIEJsYWNr",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGFrZSBNZSBIb21lLCBDb3VudHJ5IFJvYWRz",
        "artistName": "Sm9obiBEZW52ZXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ed/e9/47/ede9473f-3334-29c4-21f5-dcd3aa3c029e/mzaf_8295710681386150675.plus.aac.p.m4a"
      },
      {
        "songTitle": "R28gWW91ciBPd24gV2F5",
        "artistName": "RmxlZXR3b29kIE1hYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/81/1b/0e/811b0e3a-2693-9934-9994-999499949994/mzaf_1354444444444444444.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-11",
    "songs": [
      {
        "songTitle": "V2lsZCBIdXJzZXM=",
        "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2lsZCBXb3JsZA==",
        "artistName": "Q2F0IFN0ZXZlbnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW1z",
        "artistName": "RmxlZXR3b29kIE1hYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7e/8e/8e/7e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e/mzaf_1354444444444444444.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3dlZXQgQ2Fyb2xpbmU=",
        "artistName": "TmVpbCBEaWFtb25k",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0c/66/66/0c666666-6666-6666-6666-666666666666/mzaf_1354444444444444444.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-12",
    "songs": [
      {
        "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
        "artistName": "RGF2aWQgQm93aWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIFN0YXI=",
        "artistName": "U21hc2ggTW91dGg=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
        "artistName": "MlBhYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-13",
    "songs": [
      {
        "songTitle": "V2luZA==",
        "artistName": "SGVpemU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/54/d2/19/54d219b9-8ede-44eb-4ca0-aa5ae6936f41/mzaf_1080502773773044675.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hpdGUgTm9pc2UgLSBMb29wYWJsZSB3aXRoIE5vIEZhZGU=",
        "artistName": "THVsbGFiaWVzIGZvciBEZWVwIE1lZGl0YXRpb24sIEJhYnkgU3dlZXQgRHJlYW0gJiBXaGl0ZSBOb2lzZSBSZXNlYXJjaA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/99/d6/a2/99d6a2d6-1eef-b34b-cb4d-9265b42a80f1/mzaf_13622051946732284178.plus.aac.p.m4a"
      },
      {
        "songTitle": "SGVhcnQ=",
        "artistName": "U2xlZXBpbmcgQXQgTGFzdA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fa/7b/ff/fa7bff6f-daca-129a-2ff2-7e463d046a23/mzaf_9116019715007521193.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2xlYW4gV2hpdGUgTm9pc2UgLSBMb29wYWJsZSB3aXRoIG5vIGZhZGU=",
        "artistName": "V2hpdGUgTm9pc2UgRm9yIEJhYmllcw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/31/4e/b0/314eb023-4d85-1f4f-fb0f-839dfb7f0cc4/mzaf_63911033827257168.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-14",
    "songs": [
      {
        "songTitle": "SGVhcnQ=",
        "artistName": "WWlydW1h",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ed/b5/c6/edb5c67d-6da2-f3ad-43f9-2e8cd3aa976b/mzaf_2120605894412457052.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hlbiBEaWQgWW91IEdldCBIb3Q/",
        "artistName": "U2FicmluYSBDYXJwZW50ZXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/47/62/2d/47622d6c-1fac-1b5b-deb6-f31bbd3cf0a4/mzaf_10579840420969745198.plus.aac.p.m4a"
      },
      {
        "songTitle": "R2l2ZSBNZSBFdmVyeXRoaW5nIChmZWF0LiBOZS1ZbywgQWZyb2phY2sgJiBOYXllcik=",
        "artistName": "UGl0YnVsbA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/07/7a/58/077a5833-acac-306a-c927-f800f1e09d4d/mzaf_10663174745007601529.plus.aac.p.m4a"
      },
      {
        "songTitle": "SnVzdCBHaXZlIE1lIGEgUmVhc29uIChmZWF0LiBOYXRlIFJ1ZXNzKQ==",
        "artistName": "UCFuaw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6b/98/87/6b98879c-5091-bcaa-24c9-07c69252db8c/mzaf_12123656044443906655.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-15",
    "songs": [
      {
        "songTitle": "R29vZGJ5ZSBUbyBhIFdvcmxk",
        "artistName": "UG9ydGVyIFJvYmluc29u",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a5/e4/73/a5e473cd-8afa-5866-dfa4-05d9d34d931f/mzaf_8602130331386075136.plus.aac.p.m4a"
      },
      {
        "songTitle": "SGVyZSBDb21lcyB0aGUgU3Vu",
        "artistName": "VGhlIEJlYXRsZXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e7/bf/a0/e7bfa041-6e35-be4e-276e-df489781b5d4/mzaf_1668350712755343495.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3Vu",
        "artistName": "RGVyaWsgRmVpbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/42/dc/18/42dc181f-c91b-6ddb-9ae5-0bb9218e8c71/mzaf_5481975052691551220.plus.aac.p.m4a"
      },
      {
        "songTitle": "TGlmZQ==",
        "artistName": "WmxhdGFu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/64/d3/96/64d396a5-dc19-0455-3036-e7e4efa01bb0/mzaf_6421713023306343599.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-16",
    "songs": [
      {
        "songTitle": "SGVhcnQ=",
        "artistName": "UmFpbmJvdyBLaXR0ZW4gU3VycHJpc2U=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/9e/d4/329ed441-9ff0-ac06-cb9d-567291d7e823/mzaf_17774460053357084027.plus.aac.p.m4a"
      },
      {
        "songTitle": "SGVhcnQ=",
        "artistName": "UGV0IFNob3AgQm95cw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/a1/a6/81/a1a68198-8516-8627-8445-9b55c6d17236/mzaf_15175397729154566118.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2VhIChZb3VuZyBNYXJjbyBSZW1peCk=",
        "artistName": "Um9vc2V2ZWx0",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/91/95/e0/9195e0d1-13af-3e68-47e5-dd06b3b90edc/mzaf_1954280318029273744.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3Vu",
        "artistName": "VGhvbWFzIEJlcmdlcnNlbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cb/8f/c6/cb8fc6ef-24ff-e180-d81e-4881bee97c83/mzaf_18132992508575453284.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-17",
    "songs": [
      {
        "songTitle": "Q2FuJ3QgQnV5IE1lIExvdmU=",
        "artistName": "VGhlIEJlYXRsZXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a5/5f/19/a55f190f-0864-b42d-7470-92d232aeb8c3/mzaf_9577887192068917089.plus.aac.p.m4a"
      },
      {
        "songTitle": "TmlnaHQgKEJyb3duIE5vaXNlKQ==",
        "artistName": "S2luc3Vu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/07/5e/6a/075e6a17-e594-59d8-071b-0bd2d8650151/mzaf_4517783963597021053.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q29tZSBBbGl2ZQ==",
        "artistName": "SHVnaCBKYWNrbWFuLCBLZWFsYSBTZXR0bGUsIERhbmllbCBFdmVyaWRnZSwgWmVuZGF5YSAmIFRoZSBHcmVhdGVzdCBTaG93bWFuIEVuc2VtYmxl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/07/4b/48/074b4884-40cc-2360-43a6-64c9efc08d24/mzaf_18119671828835820765.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q2FuJ3QgUmFpc2UgYSBNYW4=",
        "artistName": "Sy4gTWljaGVsbGU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7d/17/ea/7d17ea36-38bd-a9f5-d177-d3b3de5e4d76/mzaf_6235913085044676075.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-18",
    "songs": [
      {
        "songTitle": "QnJva2VuIEhhbG9z",
        "artistName": "Q2hyaXMgU3RhcGxldG9u",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e4/46/ad/e446ad0e-5f87-6a57-95c3-3ce3e20f4796/mzaf_11682704741768958620.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGllIEZyb20gQSBCcm9rZW4gSGVhcnQ=",
        "artistName": "TWFkZGllICYgVGFl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/3d/62/963d6248-f09f-3a80-1fcb-d595014df02a/mzaf_4005873962279736278.plus.aac.p.m4a"
      },
      {
        "songTitle": "RXNwZWN0YWN1bGFy",
        "artistName": "U2t5IFJvbXBpZW5kbyAmIFJhdXcgQWxlamFuZHJv",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8c/4c/38/8c4c38d8-b33a-7ee8-f1c4-1f4d545b5902/mzaf_2973113262204844303.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFtYmxpbicgTWFu",
        "artistName": "VGhlIEFsbG1hbiBCcm90aGVycyBCYW5k",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/03/f9/c8/03f9c8e0-b101-ed77-b0b3-daab01aff22c/mzaf_4064328194078385484.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-19",
    "songs": [
      {
        "songTitle": "QWxsIFRoZSBXYXkgTGl2ZSAoU3BpZGVyLU1hbjogQWNyb3NzIHRoZSBTcGlkZXItVmVyc2Up",
        "artistName": "TWV0cm8gQm9vbWluLCBGdXR1cmUgJiBMaWwgVXppIFZlcnQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2d/be/30/2dbe30a2-ef6a-9c4c-975d-2eab110fd4c9/mzaf_5565641359723589645.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2luY2UgV2F5IEJhY2sgKGZlYXQuIFBBUlRZTkVYVERPT1Ip",
        "artistName": "RHJha2U=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/90/35/97/90359766-d1e7-e5af-7ac6-019aa285bea1/mzaf_6413080072066992558.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGhvdG9ncmFwaA==",
        "artistName": "RWQgU2hlZXJhbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/4f/6a/114f6ad0-165c-1e3c-8fbd-df4707d7ae26/mzaf_12480083080052535279.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW0=",
        "artistName": "QWxhbiBXYXR0cywgQm9yZXRhICYgU3VwZXJwb3NpdGlvbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/15/ea/86/15ea8603-bbf2-0ffc-ea5b-56bbabb4645b/mzaf_3270835961576480707.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-20",
    "songs": [
      {
        "songTitle": "UmFpbiAtIEdlbnRsZSwgUmVsYXhpbmcgUmFpbiBTb3VuZHM=",
        "artistName": "Q2FsbXNvdW5k",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/35/7d/11/357d115e-3c98-3a7c-2b8f-3ad5e939847d/mzaf_13573717888920516058.plus.aac.p.m4a"
      },
      {
        "songTitle": "V29tYW4=",
        "artistName": "S2FuZSBCcm93bg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/25/24/85/252485ef-d834-08f9-1061-dc6fb44b3b86/mzaf_667886181363622809.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGltZSAoRWRpdCk=",
        "artistName": "UGluayBGbG95ZA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ad/d3/32/add33205-f271-b769-0027-612e5e0f2100/mzaf_14570436363494513081.plus.aac.p.m4a"
      },
      {
        "songTitle": "TWFuISBJIEZlZWwgTGlrZSBhIFdvbWFuIQ==",
        "artistName": "U2hhbmlhIFR3YWlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/99/5a/c9/995ac911-a854-5116-97c4-c497380c0de3/mzaf_17795781825956372203.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-21",
    "songs": [
      {
        "songTitle": "UmFpbg==",
        "artistName": "VGhlIEN1bHQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1d/c6/95/1dc695d8-9a5b-c92d-0215-be189955e247/mzaf_1345610676396260243.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWZ0ZXIgRGFyaw==",
        "artistName": "TXIuS2l0dHk=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/26/23/3c/26233cdf-ae9e-a40e-3e5c-8645bac1dd00/mzaf_4554903182036177858.plus.aac.p.m4a"
      },
      {
        "songTitle": "TXkgU29uZ3MgS25vdyBXaGF0IFlvdSBEaWQgSW4gVGhlIERhcmsgKExpZ2h0IEVtIFVwKQ==",
        "artistName": "RmFsbCBPdXQgQm95",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a9/24/b5/a924b5b7-62cb-58de-8a67-840e350ee36b/mzaf_16782497682409176243.plus.aac.p.m4a"
      },
      {
        "songTitle": "RXllcw==",
        "artistName": "VGhlIERldmlsIFdlYXJzIFByYWRh",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e4/2a/ba/e42abad9-6d13-4bf5-f18c-0cc92b05640f/mzaf_14213997970921028425.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-22",
    "songs": [
      {
        "songTitle": "U291bA==",
        "artistName": "TGVlIEJyaWNl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ba/11/8c/ba118c41-4a60-1c2a-a403-95af92893828/mzaf_9157416825955766994.plus.aac.p.m4a"
      },
      {
        "songTitle": "VC5OLlQu",
        "artistName": "QUMvREM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/aa/a1/94/aaa194f9-9568-a6b8-1ee0-c231eab9412a/mzaf_2739203206537586158.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2V2ZW4gRGF5cyAoZmVhdC4gR2VvcmdlIEJlbnNvbik=",
        "artistName": "TWFyeSBKLiBCbGlnZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/45/b6/c7/45b6c7d0-58f9-e000-e3ff-f75b0bba9b36/mzaf_11934646198016326419.plus.aac.p.m4a"
      },
      {
        "songTitle": "U291bA==",
        "artistName": "V2F0c2ViaGE=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/63/82/f1/6382f14c-303f-aee5-0343-3a16ad8110dc/mzaf_15099738591080600336.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-23",
    "songs": [
      {
        "songTitle": "TWluZA==",
        "artistName": "RGlydHkgQXVkaW8gJiBaRUtFIEJFQVRT",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/3e/94/82/3e948213-bb11-0b01-7b48-bee1a296697a/mzaf_10362158926303749652.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFpbnkgRGF5cw==",
        "artistName": "TWFyaWFoIHRoZSBTY2llbnRpc3Q=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9e/8c/5e/9e8c5ea3-f2ca-b79c-2609-829badf73db8/mzaf_18425883135684767413.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2F2ZSBJdCBmb3IgYSBSYWlueSBEYXk=",
        "artistName": "S2VubnkgQ2hlc25leQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8d/34/f0/8d34f008-d09d-0729-7b06-2c32f6493e60/mzaf_9109646590077461108.plus.aac.p.m4a"
      },
      {
        "songTitle": "R2lybA==",
        "artistName": "R0FXVkk=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a4/f9/7e/a4f97e55-3318-78f0-48b5-ab90aa8b884d/mzaf_3341403479034260472.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-24",
    "songs": [
      {
        "songTitle": "U2Vh",
        "artistName": "Q29yY2lvbGxp",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/39/0b/91/390b9127-07bd-962d-bf88-1b0d462ddc4d/mzaf_7224069479113875146.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFpbiBPbiBNZQ==",
        "artistName": "TGFkeSBHYWdhICYgQXJpYW5hIEdyYW5kZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/77/41/4c/77414c83-2297-fb9f-7d38-47a03ab56d8f/mzaf_17756500385136857934.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2V0IEZpcmUgdG8gdGhlIFJhaW4=",
        "artistName": "QWRlbGU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/81/19/83/811983ba-173c-84f4-4058-fae8340abcdf/mzaf_13432775834568786807.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW0=",
        "artistName": "UHJpc2NpbGxhIEFobg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/26/79/9a/26799a8f-1319-2653-122c-ede0963c644a/mzaf_7053774383525042175.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-25",
    "songs": [
      {
        "songTitle": "VElNRQ==",
        "artistName": "QWxlc3Nv",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/07/d2/46/07d2468e-4422-6413-e9ed-43d46ca93e61/mzaf_100908014345525443.plus.aac.p.m4a"
      },
      {
        "songTitle": "R0lSTA==",
        "artistName": "TWFyZW4gTW9ycmlz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/be/e4/a9/bee4a9da-c323-b8e7-78e6-b3eb3f045857/mzaf_13105727371068078904.plus.aac.p.m4a"
      },
      {
        "songTitle": "TW9vbg==",
        "artistName": "VGhlIENhYg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a8/ed/d2/a8edd294-2ccb-65d0-88a7-175919f8e1a3/mzaf_16452842025317812866.plus.aac.p.m4a"
      },
      {
        "songTitle": "R2lybA==",
        "artistName": "RGVzdGlueSdzIENoaWxk",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/2f/75/56/2f7556e8-5299-46c0-f311-17ca4bf05917/mzaf_12883814489012798720.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-26",
    "songs": [
      {
        "songTitle": "TW9vbg==",
        "artistName": "U2xlZXAgRnJ1aXRzIE11c2ljICYgQW1iaWVudCBGcnVpdHMgTXVzaWM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/52/21/9152214a-6f02-ca59-bbff-7415d9bda6da/mzaf_11938131431353184203.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGhlIEtpbmQgb2YgTG92ZSBXZSBNYWtl",
        "artistName": "THVrZSBDb21icw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/02/35/49/02354915-c629-6edc-0928-2b94cc62cea5/mzaf_1381343366018505363.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIEkgV2FubmEgRG8gSXMgTWFrZSBMb3ZlIHRvIFlvdQ==",
        "artistName": "SGVhcnQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/2a/e5/10/2ae510b7-302e-a495-f0dc-78fff8943ccc/mzaf_10280498015894650403.plus.aac.p.m4a"
      },
      {
        "songTitle": "U1RBUg==",
        "artistName": "T05FV0U=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/54/f4/47/54f4475e-b53e-ae49-c660-81e2d2cd25e7/mzaf_3115307038946157673.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-27",
    "songs": [
      {
        "songTitle": "SGFwcGllcg==",
        "artistName": "TWFyc2htZWxsbyAmIEJhc3RpbGxl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fb/3f/e6/fb3fe69b-1f83-dae3-ad86-34b73a50e86c/mzaf_12086156071273718688.plus.aac.p.m4a"
      },
      {
        "songTitle": "SGFwcGllcg==",
        "artistName": "RWQgU2hlZXJhbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a5/a3/4e/a5a34ec0-b0d1-a1c5-32ef-31795d968b5f/mzaf_6657904390746527335.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3Vu",
        "artistName": "a3Vkbw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/77/12/de/7712def0-a11e-b12e-bf87-e96a69b75fbd/mzaf_8010263129328545962.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFpbg==",
        "artistName": "Q3JlZWQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/37/01/f1/3701f11b-66c7-c0c6-eedc-cc90008b6fb5/mzaf_9966080295848785333.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-28",
    "songs": [
      {
        "songTitle": "R3JlYXRlc3QgTG92ZSBTdG9yeQ==",
        "artistName": "TEFOQ08=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e6/dd/85/e6dd8554-980c-72ed-dd79-e11e152a912d/mzaf_3658382167593681337.plus.aac.p.m4a"
      },
      {
        "songTitle": "TG92ZSBTdG9yeSAoVGF5bG9y4oCZcyBWZXJzaW9uKQ==",
        "artistName": "VGF5bG9yIFN3aWZ0",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8b/4c/b3/8b4cb3a5-b1d1-c82c-e6ab-48cc3969d4ff/mzaf_858711921713575608.plus.aac.p.m4a"
      },
      {
        "songTitle": "TG92ZSBTb21lYm9keQ==",
        "artistName": "TW9yZ2FuIFdhbGxlbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b6/e1/bd/b6e1bdf5-d47b-a17a-9430-06329686bca4/mzaf_3232395888226796939.plus.aac.p.m4a"
      },
      {
        "songTitle": "TW9vbg==",
        "artistName": "U2lh",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/86/74/f8/8674f857-83cb-6053-5544-0b370d1fad9f/mzaf_11498649209160898282.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-29",
    "songs": [
      {
        "songTitle": "U3Vu",
        "artistName": "U2tpbnNoYXBl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/83/fe/74/83fe749e-0f48-b826-aa67-fa556690a3d9/mzaf_16479409629891355271.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2h5J2QgWW91IE9ubHkgQ2FsbCBNZSBXaGVuIFlvdSdyZSBIaWdoPw==",
        "artistName": "QXJjdGljIE1vbmtleXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/d5/69/59/d5695958-0f8c-9db3-9878-b2045a981c72/mzaf_12816097313051041256.plus.aac.p.m4a"
      },
      {
        "songTitle": "T25seSBHaXJsIChJbiBUaGUgV29ybGQp",
        "artistName": "UmloYW5uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/58/bd/6f/58bd6f05-45d7-76d7-bae3-6d453e00b5cc/mzaf_1937910784700207272.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGFuY2UgTW9ua2V5",
        "artistName": "VG9uZXMgQW5kIEk=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/43/1a/32/431a3203-7e62-c7b1-0377-824aded16096/mzaf_7471896698419931094.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-06-30",
    "songs": [
      {
        "songTitle": "Q2xlYW4gV2hpdGUgTm9pc2UgLSBMb29wYWJsZSB3aXRoIG5vIGZhZGU=",
        "artistName": "V2hpdGUgTm9pc2UgRm9yIEJhYmllcw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/31/4e/b0/314eb023-4d85-1f4f-fb0f-839dfb7f0cc4/mzaf_63911033827257168.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGltZSAoRWRpdCk=",
        "artistName": "UGluayBGbG95ZA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ad/d3/32/add33205-f271-b769-0027-612e5e0f2100/mzaf_14570436363494513081.plus.aac.p.m4a"
      },
      {
        "songTitle": "UHJhaXNlIFlvdSBJbiBUaGlzIFN0b3Jt",
        "artistName": "Q2FzdGluZyBDcm93bnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b2/75/c8/b275c82b-2b76-0523-2784-5e4c0f093b53/mzaf_22457658955080842.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hpdGUgTm9pc2UgLSBMb29wYWJsZSB3aXRoIE5vIEZhZGU=",
        "artistName": "THVsbGFiaWVzIGZvciBEZWVwIE1lZGl0YXRpb24sIEJhYnkgU3dlZXQgRHJlYW0gJiBXaGl0ZSBOb2lzZSBSZXNlYXJjaA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/99/d6/a2/99d6a2d6-1eef-b34b-cb4d-9265b42a80f1/mzaf_13622051946732284178.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-01",
    "songs": [
      {
        "songTitle": "UmFpbg==",
        "artistName": "QlRT",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/78/8f/1f/788f1f30-4ef1-6636-254d-eeb4d8c410b7/mzaf_10455926999264557055.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW0=",
        "artistName": "Um9hcg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/d3/17/64/d31764d6-f919-ccda-132e-520b209bdeb3/mzaf_10039277936031024063.plus.aac.p.m4a"
      },
      {
        "songTitle": "TWFnaWMgTWFu",
        "artistName": "SGVhcnQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/72/2f/3b/722f3b44-2453-37a9-be7b-1b8036be9f2c/mzaf_439921913097563221.plus.aac.p.m4a"
      },
      {
        "songTitle": "TWFuIEkgTmVlZA==",
        "artistName": "T2xpdmlhIERlYW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/81/2c/6d/812c6df3-5481-5e61-b5d1-306d485b0d9d/mzaf_6058256111555931162.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-02",
    "songs": [
      {
        "songTitle": "SG93IExvbmcgV2lsbCBJIExvdmUgWW91IChCb251cyBUcmFjayk=",
        "artistName": "RWxsaWUgR291bGRpbmc=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e1/ba/f3/e1baf340-56f8-e4bb-442f-8c308ca7e832/mzaf_535073628033174642.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG91c2UgVG91cg==",
        "artistName": "U2FicmluYSBDYXJwZW50ZXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b6/15/0c/b6150c36-0765-c563-a250-ba767c00c809/mzaf_4225228786396793280.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW0=",
        "artistName": "QWxleCBMdXN0aWc=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/74/a5/b6/74a5b6da-2151-9d14-8e5d-cfc0bf39dd72/mzaf_5858896748813469020.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGhpcyBJcyBIb3cgV2UgRG8gSXQ=",
        "artistName": "TW9udGVsbCBKb3JkYW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d7/13/51/d713513c-307f-9089-84b0-b16f396000a8/mzaf_11362731170022474166.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-03",
    "songs": [
      {
        "songTitle": "TG92ZQ==",
        "artistName": "S2V5c2hpYSBDb2xl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/55/0e/76/550e7623-1867-f685-0b5a-d6efd483752c/mzaf_18113724796346152750.plus.aac.p.m4a"
      },
      {
        "songTitle": "TE9WRS4gKGZlYXQuIFphY2FyaSk=",
        "artistName": "S2VuZHJpY2sgTGFtYXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/72/71/89/72718957-3475-8f6f-3685-aedd470ddc20/mzaf_4044691450436775386.plus.aac.p.m4a"
      },
      {
        "songTitle": "TGlmZQ==",
        "artistName": "T3VyIExhZHkgUGVhY2U=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/15/31/be/1531be3c-0907-9780-914c-31f50c4dd26e/mzaf_2712059388100982341.plus.aac.p.m4a"
      },
      {
        "songTitle": "SGVhcnQgKDIwMDMgUmVtYXN0ZXIp",
        "artistName": "UGV0IFNob3AgQm95cw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8a/46/2b/8a462bd5-e8cf-af94-83ed-e8d871a55b3a/mzaf_17853555904709188457.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-04",
    "songs": [
      {
        "songTitle": "TG92ZSBZb3UgRG93bg==",
        "artistName": "UmVhZHkgZm9yIHRoZSBXb3JsZA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ee/b1/9f/eeb19f04-161a-802e-ac06-ae71c7eaa635/mzaf_5836667775123271323.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3Vu",
        "artistName": "V2F0c2ViaGE=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/c6/9f/ae/c69fae44-9357-6969-881a-d4c53df7e10d/mzaf_15870001981862895529.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG9saWRheQ==",
        "artistName": "R3JlZW4gRGF5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/f1/d0/86f1d039-f2d6-2f5b-b34b-2b63504fa6d0/mzaf_3363059623415356317.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3RyaXAgVGhhdCBEb3duIChmZWF0LiBRdWF2byk=",
        "artistName": "TGlhbSBQYXluZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/95/f7/7595f7c7-07e8-5e1c-6ce6-8c0af5f6d7ba/mzaf_4483906587349398313.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-05",
    "songs": [
      {
        "songTitle": "RXllcw==",
        "artistName": "VFdPIExBTkVT",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3e/1d/7f/3e1d7ffe-2ff7-beeb-b5c1-69fc4427e93c/mzaf_12530936067391834535.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2FubmEgQmUgTG92ZWQ=",
        "artistName": "VGhlIFJlZCBDbGF5IFN0cmF5cw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a2/7d/a9/a27da9b6-089f-9412-4ad2-04112846057b/mzaf_8158683457128740732.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFpbg==",
        "artistName": "QlRT",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/78/8f/1f/788f1f30-4ef1-6636-254d-eeb4d8c410b7/mzaf_10455926999264557055.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWxsIEkgV2FubmEgRG8gSXMgTWFrZSBMb3ZlIHRvIFlvdQ==",
        "artistName": "SGVhcnQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/2a/e5/10/2ae510b7-302e-a495-f0dc-78fff8943ccc/mzaf_10280498015894650403.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-06",
    "songs": [
      {
        "songTitle": "U2hha2UgSXQgT2Zm",
        "artistName": "VGF5bG9yIFN3aWZ0",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/04/86/32/048632f7-a5c5-0f5d-6213-a9e89c3a99b3/mzaf_8458239339293825693.plus.aac.p.m4a"
      },
      {
        "songTitle": "UGhvdG9ncmFwaA==",
        "artistName": "RWQgU2hlZXJhbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/4f/6a/114f6ad0-165c-1e3c-8fbd-df4707d7ae26/mzaf_12480083080052535279.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hhdCBhIFdvbmRlcmZ1bCBXb3JsZA==",
        "artistName": "TG91aXMgQXJtc3Ryb25n",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/80/9e/03/809e03c7-a40f-b225-0288-8e7026bcea7f/mzaf_9728252713200166685.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hhdCBJIFdhbnQ=",
        "artistName": "TW9yZ2FuIFdhbGxlbiAmIFRhdGUgTWNSYWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9d/a6/25/9da62595-d503-7386-f2d1-c5b88445f127/mzaf_14086223011172851577.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-07",
    "songs": [
      {
        "songTitle": "Q2xlYW4gV2hpdGUgTm9pc2UgLSBMb29wYWJsZSB3aXRoIG5vIGZhZGU=",
        "artistName": "V2hpdGUgTm9pc2UgRm9yIEJhYmllcw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/31/4e/b0/314eb023-4d85-1f4f-fb0f-839dfb7f0cc4/mzaf_63911033827257168.plus.aac.p.m4a"
      },
      {
        "songTitle": "RXllcw==",
        "artistName": "R2lybHMnIEdlbmVyYXRpb24tVFRT",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/68/8d/6b/688d6ba6-137b-1a23-89d4-f82223e9b763/mzaf_9835419320476557272.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hpdGUgTm9pc2UgLSBMb29wYWJsZSB3aXRoIE5vIEZhZGU=",
        "artistName": "THVsbGFiaWVzIGZvciBEZWVwIE1lZGl0YXRpb24sIEJhYnkgU3dlZXQgRHJlYW0gJiBXaGl0ZSBOb2lzZSBSZXNlYXJjaA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/99/d6/a2/99d6a2d6-1eef-b34b-cb4d-9265b42a80f1/mzaf_13622051946732284178.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hlbiBJIFdhcyBZb3VyIE1hbg==",
        "artistName": "QnJ1bm8gTWFycw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/82/d2/9a/82d29a5f-d9a0-57f4-c0ec-f785969240c3/mzaf_5320660780349800682.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-08",
    "songs": [
      {
        "songTitle": "Um9jaw==",
        "artistName": "U3RlcHo=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b6/d7/cd/b6d7cdd3-9bfd-7890-9a2d-39e251248f7c/mzaf_11646318067262278878.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2ltcGxlIE1hbiAoUm9jayBWZXJzaW9uKQ==",
        "artistName": "U2hpbmVkb3du",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0f/d8/20/0fd820f9-b3e9-111b-5d48-2098823d355e/mzaf_12999965779402868422.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmV5b25kIHRoZSBTZWE=",
        "artistName": "Qm9iYnkgRGFyaW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/65/38/53/65385319-e8e7-c441-8891-7f300e26c642/mzaf_13929366315032702332.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2ltcGxlIE1hbg==",
        "artistName": "THlueXJkIFNreW55cmQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/43/3c/47/433c475a-c6e2-600a-c056-dfdf8003fddf/mzaf_15232046890087309380.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-09",
    "songs": [
      {
        "songTitle": "R29vZA==",
        "artistName": "VHllIFRyaWJiZXR0",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/64/f2/61/64f261d0-c4f8-1284-95a6-8b21fb130a26/mzaf_12246562329432460652.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3RhciE=",
        "artistName": "RnJhbmsgU2luYXRyYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f7/74/83/f77483f9-d730-b203-6406-124052142a4d/mzaf_11469144290723230255.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2F5IEFtZW4gKFNhdHVyZGF5IE5pZ2h0KQ==",
        "artistName": "UGFuaWMhIEF0IHRoZSBEaXNjbw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d1/04/e6/d104e670-632d-4c40-fb74-929448f3accd/mzaf_15832654786205628477.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2F5IFNvbWV0aGluZw==",
        "artistName": "QSBHcmVhdCBCaWcgV29ybGQgJiBDaHJpc3RpbmEgQWd1aWxlcmE=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8f/5a/12/8f5a1264-ae49-e7e4-e3d7-7831e59c4b83/mzaf_5239120977186816345.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-10",
    "songs": [
      {
        "songTitle": "VGhpbmdzIGEgTWFuIE91Z2h0YSBLbm93",
        "artistName": "TGFpbmV5IFdpbHNvbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9f/63/39/9f633941-0cc5-3254-b360-988f4fd4cae4/mzaf_10971886594067079534.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmVhdXRpZnVsIFRoaW5ncw==",
        "artistName": "QmVuc29uIEJvb25l",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4d/d5/00/4dd5006f-ee02-c3f1-94db-0ed4b8dd68f1/mzaf_14250561294796027079.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFpbg==",
        "artistName": "UGF0dHkgR3JpZmZpbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a2/19/41/a219413b-9ce0-c827-6d88-82524939a519/mzaf_10029832554036853083.plus.aac.p.m4a"
      },
      {
        "songTitle": "U291bCAoUjNIQUIgUmVtaXgp",
        "artistName": "TGVlIEJyaWNlLCBCbGFuY28gQnJvd24gJiBSM0hBQg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/f7/cf/f1/f7cff1e6-ee13-4380-e406-62f7233391f9/mzaf_3249971282190963924.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-11",
    "songs": [
      {
        "songTitle": "U3RhciAoU2luZ2xlIE1peCk=",
        "artistName": "RXJhc3VyZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b2/f8/f7/b2f8f7ad-5d09-53cb-8a35-9e06bdc2be66/mzaf_7715293813660618459.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hhdCBXYXMgSSBNYWRlIEZvcj8gKEZyb20gVGhlIE1vdGlvbiBQaWN0dXJlICJCYXJiaWUiKQ==",
        "artistName": "QmlsbGllIEVpbGlzaA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4e/89/79/4e8979d0-31cc-d2c7-751d-9c5368f53885/mzaf_8166853517153482173.plus.aac.p.m4a"
      },
      {
        "songTitle": "TWFuIE1hZGUgQSBCYXIgKGZlYXQuIEVyaWMgQ2h1cmNoKQ==",
        "artistName": "TW9yZ2FuIFdhbGxlbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7c/ba/ee/7cbaeedc-eae3-628d-8dd9-2a0d562e7e6b/mzaf_6685081816583629149.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmFieQ==",
        "artistName": "QmFrZXJtYXQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ec/d9/b8/ecd9b864-68c8-6ffb-5770-971bf8b97a38/mzaf_1487951394275952222.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-12",
    "songs": [
      {
        "songTitle": "RmlyZQ==",
        "artistName": "QmFybnMgQ291cnRuZXk=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d2/6d/2b/d26d2baf-ddc2-da3c-956d-3d6a4f3fcd99/mzaf_14761578515289173629.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmVhdXRpZnVsIEdpcmxz",
        "artistName": "U2VhbiBLaW5nc3Rvbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/82/d9/a0/82d9a028-82ab-0381-a458-00892b19745b/mzaf_16253303216124788608.plus.aac.p.m4a"
      },
      {
        "songTitle": "YWxsIHRoZSBnb29kIGdpcmxzIGdvIHRvIGhlbGw=",
        "artistName": "QmlsbGllIEVpbGlzaA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9a/d2/c3/9ad2c3db-2d1a-94e3-cb9f-9b824ce160da/mzaf_190262811220691792.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3RhciE=",
        "artistName": "RnJhbmsgU2luYXRyYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f7/74/83/f77483f9-d730-b203-6406-124052142a4d/mzaf_11469144290723230255.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-13",
    "songs": [
      {
        "songTitle": "VEhFU0UgQVJFIFRIRSBEQVlT",
        "artistName": "TmlrbyBNb29u",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/de/d4/ab/ded4ab05-57e5-8601-1a77-feccafbabc09/mzaf_1242089504289638443.plus.aac.p.m4a"
      },
      {
        "songTitle": "V29tYW4=",
        "artistName": "S2FyZW4gTyAmIERhbmdlciBNb3VzZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0b/91/41/0b914183-b2d5-3fde-9733-6b7306a784a9/mzaf_13178076003818756383.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGhlc2UgRHJlYW1z",
        "artistName": "SGVhcnQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/95/17/e9/9517e9ba-83c9-5b3d-1424-7cc15300e525/mzaf_12358334756963542641.plus.aac.p.m4a"
      },
      {
        "songTitle": "c2VhIChsb3MgYW5nZWxlcyBhbWJpZW50IG1peCk=",
        "artistName": "UC4gTW9ycmlz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5b/20/fc/5b20fc7a-5adc-aff8-e6a1-607c47a60506/mzaf_6381207765494857465.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-14",
    "songs": [
      {
        "songTitle": "Q2FuJ3QgVGFrZSBNeSBFeWVzIE9mZiBZb3U=",
        "artistName": "RnJhbmtpZSBWYWxsaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d4/99/d9/d499d93b-e65a-b192-4646-19b820594db6/mzaf_6962185864508552977.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2t5IChHb29iYWppZSk=",
        "artistName": "R2VvcmdlIFdpbnN0b24=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/45/10/53/4510530a-491e-f22b-5839-64a2129bd874/mzaf_3852015405099379945.plus.aac.p.m4a"
      },
      {
        "songTitle": "QWRvcmUgWW91",
        "artistName": "TWlsZXkgQ3lydXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/28/d3/ee/28d3eea1-e0b6-dbd6-7aa9-3acd7351e07d/mzaf_4724491192576094323.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2hha2UgSXQgT2Zm",
        "artistName": "VGF5bG9yIFN3aWZ0",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/04/86/32/048632f7-a5c5-0f5d-6213-a9e89c3a99b3/mzaf_8458239339293825693.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-15",
    "songs": [
      {
        "songTitle": "QSBTa3kgRnVsbCBvZiBTdGFycw==",
        "artistName": "Q29sZHBsYXk=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a2/31/4b/a2314b97-10b6-190c-72b3-45cc21bbf56b/mzaf_740612971315603868.plus.aac.p.m4a"
      },
      {
        "songTitle": "RVlFUw==",
        "artistName": "VGhlIEJsYXpl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/22/d2/f8/22d2f843-23d3-057f-3ead-6d98f838f18b/mzaf_14813222819881357093.plus.aac.p.m4a"
      },
      {
        "songTitle": "TWluZA==",
        "artistName": "VGhlIEhlYXZ5IEV5ZXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/15/ef/cc/15efccf2-ce8a-82c8-918e-e704804c6bd8/mzaf_2050068155694527314.plus.aac.p.m4a"
      },
      {
        "songTitle": "TXIuIEJsdWUgU2t5",
        "artistName": "RWxlY3RyaWMgTGlnaHQgT3JjaGVzdHJh",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/57/4a/66574ac6-6e8f-3250-1b95-8dc97e3c2023/mzaf_11018520996084989072.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-16",
    "songs": [
      {
        "songTitle": "U21hbGwgVG93biBCb3k=",
        "artistName": "RHVzdGluIEx5bmNo",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/77/8e/29/778e29cf-d4d2-3d23-03cf-3a8cfef6734f/mzaf_61951479584415215.plus.aac.p.m4a"
      },
      {
        "songTitle": "SXQncyBhIFNtYWxsIFdvcmxk",
        "artistName": "QmFieSBMdWxsYWJ5IEFjYWRlbXk=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fe/ea/96/feea9664-418d-deec-4a86-35e814f0daac/mzaf_1207357372803478984.plus.aac.p.m4a"
      },
      {
        "songTitle": "R2lybCAoZmVhdC4gVHJlZSBHaWFudHMp",
        "artistName": "SG9sbHlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/16/f1/da16f199-33fd-f9c7-7831-e4ec84e9ffc7/mzaf_12178650310069424006.plus.aac.p.m4a"
      },
      {
        "songTitle": "TWFraW4nIEdvb2QgTG92ZQ==",
        "artistName": "QXZhbnQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/72/01/ee/7201eec7-a873-6456-293e-5c0e36de0710/mzaf_8526477592473716610.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-17",
    "songs": [
      {
        "songTitle": "QWxsIEkgV2FudCBmb3IgQ2hyaXN0bWFzIElzIFlvdQ==",
        "artistName": "TWFyaWFoIENhcmV5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/df/93/49/df93491d-65a6-bb2d-eb03-9ad3b3d62438/mzaf_10792594730801509593.plus.aac.p.m4a"
      },
      {
        "songTitle": "TGlmZQ==",
        "artistName": "SSBWaXJ0dW9zaSBJdGFsaWFuaSAmIERhbmllbCBIb3Bl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9f/4d/e9/9f4de970-89a9-de92-c427-d377709b830d/mzaf_9679962312190718019.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hhdCBJIFdhbnQ=",
        "artistName": "TW9yZ2FuIFdhbGxlbiAmIFRhdGUgTWNSYWU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9d/a6/25/9da62595-d503-7386-f2d1-c5b88445f127/mzaf_14086223011172851577.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2luZCAoZnJvbSAiTmFydXRvIik=",
        "artistName": "Sm9uYXRoYW4gUGFyZWNraSAmIFN3aWdnbGVzUlA=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/68/fb/44/68fb4499-87a7-486d-fc6f-e0d8246c58d5/mzaf_2022267527524402369.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-18",
    "songs": [
      {
        "songTitle": "VElNRQ==",
        "artistName": "QWxlc3Nv",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/07/d2/46/07d2468e-4422-6413-e9ed-43d46ca93e61/mzaf_100908014345525443.plus.aac.p.m4a"
      },
      {
        "songTitle": "QXJvdW5kIHRoZSBXb3JsZA==",
        "artistName": "RGFmdCBQdW5r",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ee/22/1a/ee221ab0-02dd-7290-47e7-383ad9c81e3b/mzaf_912969547193259322.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hhdCBNeSBXb3JsZCBTcGlucyBBcm91bmQ=",
        "artistName": "Sm9yZGFuIERhdmlz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/54/0a/73/540a731b-d552-f911-7483-b7472c6eda4b/mzaf_14874870809816589196.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmFieSBDb21lIEJhY2s=",
        "artistName": "UGxheWVy",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/57/22/1b/57221bb8-00f6-3d7f-2c38-7204e98c1dfb/mzaf_4332271055466605013.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-19",
    "songs": [
      {
        "songTitle": "V2hlbiBJIENvbWUgQXJvdW5k",
        "artistName": "R3JlZW4gRGF5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a9/46/e1/a946e1a8-52b4-67e6-4365-0603a478a1ae/mzaf_16849772022084832336.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGltZQ==",
        "artistName": "U25vaCBBYWxlZ3Jh",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/13/0e/a8/130ea89e-e665-3292-a2b7-0bd5ab314362/mzaf_8833156474941931738.plus.aac.p.m4a"
      },
      {
        "songTitle": "R29vZCBHaXJsIEdvbmUgTWlzc2lu4oCZ",
        "artistName": "TW9yZ2FuIFdhbGxlbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f2/d6/70/f2d67044-65c4-c5b8-bb3e-67421aa2d062/mzaf_10752673764195049431.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2h5J2QgWW91IE9ubHkgQ2FsbCBNZSBXaGVuIFlvdSdyZSBIaWdoPw==",
        "artistName": "QXJjdGljIE1vbmtleXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/d5/69/59/d5695958-0f8c-9db3-9878-b2045a981c72/mzaf_12816097313051041256.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-20",
    "songs": [
      {
        "songTitle": "RHJlYW0=",
        "artistName": "QmlzaG9wIEJyaWdncw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a6/27/9a/a6279a6a-9030-242d-3da4-f5f05193a48e/mzaf_822112860983828210.plus.aac.p.m4a"
      },
      {
        "songTitle": "RXllcw==",
        "artistName": "Um9ndWUgV2F2ZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/7a/94/ce/7a94cebe-ed9b-93c5-af63-c60439c0baa7/mzaf_9492042767211805158.plus.aac.p.m4a"
      },
      {
        "songTitle": "RVlFUw==",
        "artistName": "VGhlIEJsYXpl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/22/d2/f8/22d2f843-23d3-057f-3ead-6d98f838f18b/mzaf_14813222819881357093.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG9saWRheQ==",
        "artistName": "R3JlZW4gRGF5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/f1/d0/86f1d039-f2d6-2f5b-b34b-2b63504fa6d0/mzaf_3363059623415356317.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-21",
    "songs": [
      {
        "songTitle": "Q3JhenkgT24gWW91",
        "artistName": "SGVhcnQ=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e6/04/13/e60413fa-39e2-d686-8386-7f65f785b4e9/mzaf_10820119375098211000.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW0=",
        "artistName": "UHJpc2NpbGxhIEFobg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/26/79/9a/26799a8f-1319-2653-122c-ede0963c644a/mzaf_7053774383525042175.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q3JhenkgRXllcw==",
        "artistName": "TW9yZ2FuIFdhbGxlbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bb/99/52/bb995228-7a02-a22c-fce2-f9eb1115683b/mzaf_10535186028468506123.plus.aac.p.m4a"
      },
      {
        "songTitle": "QlJFQUsgTVkgU09VTA==",
        "artistName": "QmV5b25jw6k=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fa/60/b4/fa60b48b-5906-0a64-6853-92b5c648c953/mzaf_1241862116086704234.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-22",
    "songs": [
      {
        "songTitle": "U2VsZiBMb3ZlIChTcGlkZXItTWFuOiBBY3Jvc3MgdGhlIFNwaWRlci1WZXJzZSk=",
        "artistName": "TWV0cm8gQm9vbWluICYgQ29pIExlcmF5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/74/3b/ee/743bee9b-011e-846d-2cc4-4155addecd52/mzaf_7478026999078986619.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2VsZiBDb250cm9s",
        "artistName": "RnJhbmsgT2NlYW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ba/cc/4d/bacc4dda-b762-0c0a-5ef0-6c2fad1bdb5c/mzaf_8909701195572310967.plus.aac.p.m4a"
      },
      {
        "songTitle": "T25lIERhbmNlIChmZWF0LiBXaXpraWQgJiBLeWxhKQ==",
        "artistName": "RHJha2U=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9f/ce/31/9fce31a8-2363-2ed1-8aba-02532737f55a/mzaf_5942699190158325867.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2XDsW9yaXRh",
        "artistName": "U2hhd24gTWVuZGVzICYgQ2FtaWxhIENhYmVsbG8=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/06/d6/cf06d6fd-f7a0-2898-8363-67688df6c14f/mzaf_8234301186390421644.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-23",
    "songs": [
      {
        "songTitle": "RmFrZSBQbGFzdGljIFRyZWVz",
        "artistName": "UmFkaW9oZWFk",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/88/7c/92/887c92d6-0979-9f01-1e9b-6762fca517bd/mzaf_1998812167371306210.plus.aac.p.m4a"
      },
      {
        "songTitle": "R2lybCAoZmVhdC4gVHJlZSBHaWFudHMp",
        "artistName": "SG9sbHlu",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/16/f1/da16f199-33fd-f9c7-7831-e4ec84e9ffc7/mzaf_12178650310069424006.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmVlciBOZXZlciBCcm9rZSBNeSBIZWFydA==",
        "artistName": "THVrZSBDb21icw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ad/f8/3d/adf83d84-5ca2-12ed-2571-9a6f6f2b68d6/mzaf_2714699330252341264.plus.aac.p.m4a"
      },
      {
        "songTitle": "TmV2ZXIgQmUgdGhlIFNhbWU=",
        "artistName": "Q2FtaWxhIENhYmVsbG8=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4e/7b/a2/4e7ba217-b7cb-0df2-2ea4-19120bd497bc/mzaf_3130532990706214969.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-24",
    "songs": [
      {
        "songTitle": "TGlmZQ==",
        "artistName": "Sy1DaSAmIEpvSm8=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5e/25/4d/5e254d69-72a8-e5cd-6354-af058036f338/mzaf_12315752228943218315.plus.aac.p.m4a"
      },
      {
        "songTitle": "TGlmZQ==",
        "artistName": "SGlsbHNvbmcgVU5JVEVE",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b3/a0/8a/b3a08a99-6eea-3fdc-6ada-4c4685f161be/mzaf_12476099728165583266.plus.aac.p.m4a"
      },
      {
        "songTitle": "TW9zdCBQZW9wbGUgQXJlIEdvb2Q=",
        "artistName": "THVrZSBCcnlhbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c2/2d/dc/c22ddc45-1e7f-138a-26a9-fad9a07e03b6/mzaf_11634311767447252180.plus.aac.p.m4a"
      },
      {
        "songTitle": "SmluZ2xlIEJlbGwgUm9jaw==",
        "artistName": "Qm9iYnkgSGVsbXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/dd/54/91dd54a1-22a4-5e8b-ea30-25ecad8f6227/mzaf_1754360905466369426.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-25",
    "songs": [
      {
        "songTitle": "VGltZQ==",
        "artistName": "UGluayBGbG95ZA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8e/b8/69/8eb869c0-a392-95ce-5c93-5e37c59d2d41/mzaf_2460489275691867035.plus.aac.p.m4a"
      },
      {
        "songTitle": "QSBXaG9sZSBOZXcgV29ybGQgKFNvdW5kdHJhY2sgVmVyc2lvbik=",
        "artistName": "TGVhIFNhbG9uZ2EgJiBCcmFkIEthbmU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7e/50/22/7e5022ce-974d-8a47-efda-efe789cd206c/mzaf_16690203909300285497.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGltZQ==",
        "artistName": "SGFucyBaaW1tZXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/94/9c/89/949c8995-41f8-d3c1-90eb-81c10b54133b/mzaf_8252792899119007978.plus.aac.p.m4a"
      },
      {
        "songTitle": "U29tZXRoaW5nIGluIHRoZSBPcmFuZ2U=",
        "artistName": "WmFjaCBCcnlhbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/32/b3/f1/32b3f1e5-33f9-2783-7011-89faa0e4c707/mzaf_15798803351390194915.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-26",
    "songs": [
      {
        "songTitle": "TW9vbg==",
        "artistName": "S2FueWUgV2VzdA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b8/60/28/b86028ff-19ad-d2c0-2b99-7ff587623889/mzaf_11405205832304808728.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFpbiAtIEEgQ09MT1JTIFNIT1c=",
        "artistName": "VGhlIFRlc2tleSBCcm90aGVycw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/de/b5/b0/deb5b020-301a-d4d9-9431-a31973ac89c0/mzaf_17515367084832170113.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGFsa2luZyB0byB0aGUgTW9vbg==",
        "artistName": "QnJ1bm8gTWFycw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/04/2e/0b/042e0b54-86f6-9386-8f7e-9b1ec7faf0af/mzaf_15396534523626746810.plus.aac.p.m4a"
      },
      {
        "songTitle": "Um9ja2V0IE1hbiAoSSBUaGluayBJdCdzIEdvaW5nIHRvIEJlIGEgTG9uZyBMb25nIFRpbWUp",
        "artistName": "RWx0b24gSm9obg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8c/09/6d/8c096da7-10b6-422b-51b6-f1f97a66380d/mzaf_5290536375751623365.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-27",
    "songs": [
      {
        "songTitle": "VHdvIFdvcmxkcw==",
        "artistName": "UGhpbCBDb2xsaW5z",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/b7/40/91b7401c-5888-bed2-3a30-b81ecb00ebb4/mzaf_7689147845756406890.plus.aac.p.m4a"
      },
      {
        "songTitle": "RHJlYW0=",
        "artistName": "QXV0b2dyYWY=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/37/44/22/374422d1-f893-516c-d4af-a624a7c8be7a/mzaf_7703811370013483114.plus.aac.p.m4a"
      },
      {
        "songTitle": "VEhFU0UgQVJFIFRIRSBEQVlT",
        "artistName": "TmlrbyBNb29u",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/de/d4/ab/ded4ab05-57e5-8601-1a77-feccafbabc09/mzaf_1242089504289638443.plus.aac.p.m4a"
      },
      {
        "songTitle": "T25lLCBUd28gU3RlcCAoZmVhdC4gTWlzc3kgRWxsaW90dCk=",
        "artistName": "Q2lhcmE=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8c/a9/9e/8ca99ece-ae5c-402c-1b1d-65f66409e19a/mzaf_8340888231468974844.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-28",
    "songs": [
      {
        "songTitle": "RG9uJ3QgU3RvcCBCZWxpZXZpbicgKDIwMjQgUmVtYXN0ZXIp",
        "artistName": "Sm91cm5leQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/5c/72/97/5c72974f-6022-f760-ad82-35964fb636b5/mzaf_12752096049347330756.plus.aac.p.m4a"
      },
      {
        "songTitle": "TWluZA==",
        "artistName": "RGVjbGFuIE1jS2VubmE=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/11/3a/bf/113abfa6-123a-a9c2-f4fa-b2bb356f7fdc/mzaf_14475272712844177535.plus.aac.p.m4a"
      },
      {
        "songTitle": "RG9uJ3QgTWluZCBJZiBJIERvIChmZWF0LiBFbGxhIExhbmdsZXkp",
        "artistName": "UmlsZXkgR3JlZW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/96/4b/88964ba3-344f-48fa-d2c9-a2ab1421511a/mzaf_3619284133913526200.plus.aac.p.m4a"
      },
      {
        "songTitle": "TU9PTg==",
        "artistName": "aS1kbGU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/64/24/e4/6424e439-c040-659a-8940-fe266a52b699/mzaf_14840034871331633017.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-29",
    "songs": [
      {
        "songTitle": "U2VwdGVtYmVy",
        "artistName": "RWFydGgsIFdpbmQgJiBGaXJl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ec/df/db/ecdfdb66-bff3-2a10-e2d4-3e40488f445c/mzaf_10755296110145466236.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2FrZSBNZSBVcCBXaGVuIFNlcHRlbWJlciBFbmRz",
        "artistName": "R3JlZW4gRGF5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6d/1e/01/6d1e01bf-4389-bc76-74d3-80cc1eb24b35/mzaf_18076976258909915107.plus.aac.p.m4a"
      },
      {
        "songTitle": "SXNsYW5kIEluIHRoZSBTdW4=",
        "artistName": "V2VlemVy",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/52/a6/03/52a6032e-39c0-fd3e-555d-ce683f3d9d31/mzaf_7707796819108024384.plus.aac.p.m4a"
      },
      {
        "songTitle": "TGlnaHQ=",
        "artistName": "QmxhemUgYW5kIHRoZSBNb25zdGVyIE1hY2hpbmVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/14/6f/22/146f2230-7a9e-db8d-0b26-7578eea1127c/mzaf_1824164539032989307.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-30",
    "songs": [
      {
        "songTitle": "RXZlcnlib2R5IFdhbnRzIHRvIFJ1bGUgdGhlIFdvcmxk",
        "artistName": "VGVhcnMgZm9yIEZlYXJz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/56/65/5f/56655f64-f26f-3a21-b2c8-c78f1c9a0a20/mzaf_11752705800252350393.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hhdCBhIFdvbmRlcmZ1bCBXb3JsZA==",
        "artistName": "TG91aXMgQXJtc3Ryb25n",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/80/9e/03/809e03c7-a40f-b225-0288-8e7026bcea7f/mzaf_9728252713200166685.plus.aac.p.m4a"
      },
      {
        "songTitle": "SGVhcnQ=",
        "artistName": "U3RhcnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/98/df/08/98df0879-894f-7b13-49d9-f67eb206dabd/mzaf_1785927940365738588.plus.aac.p.m4a"
      },
      {
        "songTitle": "V29tYW4gKEluIE1pcnJvcik=",
        "artistName": "TGEgRGlzcHV0ZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/9e/1a/13/9e1a131c-c296-f24b-4b2b-f583a9de60fc/mzaf_12027509367539928977.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-07-31",
    "songs": [
      {
        "songTitle": "TWluZCAoZmVhdC4gS2F0ZSBCb3kpIFtDZWxhZG9uIENpdHkgUmVtaXhd",
        "artistName": "U2xvdyBNYWdpYw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fa/af/15/faaf15a8-61b1-21c6-b110-81e324434ae1/mzaf_911563840634990470.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGFrZSBNZSB0byBDaHVyY2g=",
        "artistName": "SG96aWVy",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fb/95/fe/fb95fea4-aab2-151d-7e2d-a3b2740de243/mzaf_5007348610386911589.plus.aac.p.m4a"
      },
      {
        "songTitle": "V29tYW4=",
        "artistName": "Q2l0eSBhbmQgQ29sb3Vy",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/44/7d/72/447d7286-101b-090f-f3d3-29d4f8834b96/mzaf_15559166815991642710.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGFrZSBNZSBIb21lLCBDb3VudHJ5IFJvYWRzIChPcmlnaW5hbCBWZXJzaW9uKQ==",
        "artistName": "Sm9obiBEZW52ZXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e7/d1/c4/e7d1c476-fa55-0be0-adf8-5fdcc7d18f3f/mzaf_3863812668516994856.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-01",
    "songs": [
      {
        "songTitle": "Q29tZSBBbGl2ZQ==",
        "artistName": "SHVnaCBKYWNrbWFuLCBLZWFsYSBTZXR0bGUsIERhbmllbCBFdmVyaWRnZSwgWmVuZGF5YSAmIFRoZSBHcmVhdGVzdCBTaG93bWFuIEVuc2VtYmxl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/07/4b/48/074b4884-40cc-2360-43a6-64c9efc08d24/mzaf_18119671828835820765.plus.aac.p.m4a"
      },
      {
        "songTitle": "bG92ZS4=",
        "artistName": "d2F2ZSB0byBlYXJ0aA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/43/5c/d5/435cd5a8-5edd-7116-6d1c-7ac2d2184635/mzaf_13298608756858273933.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGltZSAoRWRpdCk=",
        "artistName": "TkY=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/02/22/75/022275e5-d7fe-7c1b-d94c-6e0aedd66bfe/mzaf_18266520238785280611.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hlbiBJIENvbWUgQXJvdW5k",
        "artistName": "R3JlZW4gRGF5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a9/46/e1/a946e1a8-52b4-67e6-4365-0603a478a1ae/mzaf_16849772022084832336.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-02",
    "songs": [
      {
        "songTitle": "U3Vu",
        "artistName": "U3VmamFuIFN0ZXZlbnMsIEJyeWNlIERlc3NuZXIsIE5pY28gTXVobHkgJiBKYW1lcyBNY0FsaXN0ZXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cf/e5/d0/cfe5d0dc-d1d0-05b1-214d-731fb85f55ae/mzaf_15722725497617213653.plus.aac.p.m4a"
      },
      {
        "songTitle": "V2hlbiBEaWQgWW91IEdldCBIb3Q/",
        "artistName": "U2FicmluYSBDYXJwZW50ZXI=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/47/62/2d/47622d6c-1fac-1b5b-deb6-f31bbd3cf0a4/mzaf_10579840420969745198.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFpbnkgRGF5cw==",
        "artistName": "TWFyaWFoIHRoZSBTY2llbnRpc3Q=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9e/8c/5e/9e8c5ea3-f2ca-b79c-2609-829badf73db8/mzaf_18425883135684767413.plus.aac.p.m4a"
      },
      {
        "songTitle": "TG9uZyBIb3QgU3VtbWVyIERheQ==",
        "artistName": "VHVybnBpa2UgVHJvdWJhZG91cnM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cf/76/74/cf7674bb-8bcd-ec48-0207-1f504b0abe94/mzaf_4003769093984083959.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-03",
    "songs": [
      {
        "songTitle": "V29sdmVz",
        "artistName": "U2VsZW5hIEdvbWV6ICYgTWFyc2htZWxsbw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7b/27/56/7b275622-3051-914a-2b70-de47374b4f8c/mzaf_2742001812879947761.plus.aac.p.m4a"
      },
      {
        "songTitle": "SGlnaHdheSB0byBIZWxs",
        "artistName": "QUMvREM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cb/f4/3f/cbf43f47-747d-bcc2-19cf-6bf2c523f5d8/mzaf_9504019990576453182.plus.aac.p.m4a"
      },
      {
        "songTitle": "R29vZCBhcyBIZWxs",
        "artistName": "TGl6em8=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/89/6c/a2/896ca254-3673-f66d-261c-30644eb5004a/mzaf_12055454568932010560.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3VtbWVydGltZSBTYWRuZXNz",
        "artistName": "TGFuYSBEZWwgUmV5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f5/a3/d0/f5a3d08a-635d-dc15-4c3f-ad8a04246d80/mzaf_17059298264221524369.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-04",
    "songs": [
      {
        "songTitle": "VGhlIFdvcmxkJ3MgR3JlYXRlc3QgKFJhZGlvIEVkaXQp",
        "artistName": "Ui4gS2VsbHk=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4f/ba/50/4fba508d-f8e3-6a9e-803f-b6ceb56b62b0/mzaf_6994819819562212451.plus.aac.p.m4a"
      },
      {
        "songTitle": "TGlnaHQgKFJhaW4p",
        "artistName": "SnVuYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3a/e9/f5/3ae9f5e2-5736-fc65-08b1-8710a116d7f5/mzaf_4079456209182610472.plus.aac.p.m4a"
      },
      {
        "songTitle": "Rmx5IE1lIHRvIHRoZSBNb29uIChmZWF0LiBDb3VudCBCYXNpZSBhbmQgSGlzIE9yY2hlc3RyYSk=",
        "artistName": "RnJhbmsgU2luYXRyYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d2/20/75/d22075e3-b9f6-7337-5aab-a0f21a036562/mzaf_8055883631088518579.plus.aac.p.m4a"
      },
      {
        "songTitle": "R3JlYXRlc3QgTG92ZSBTdG9yeQ==",
        "artistName": "TEFOQ08=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e6/dd/85/e6dd8554-980c-72ed-dd79-e11e152a912d/mzaf_3658382167593681337.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-05",
    "songs": [
      {
        "songTitle": "V2FubmEgQmUgTG92ZWQ=",
        "artistName": "VGhlIFJlZCBDbGF5IFN0cmF5cw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a2/7d/a9/a27da9b6-089f-9412-4ad2-04112846057b/mzaf_8158683457128740732.plus.aac.p.m4a"
      },
      {
        "songTitle": "RXllcw==",
        "artistName": "U2xvdGggUHVuY2ggJiBUSE1QU04=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/56/9d/bb/569dbb67-4ba9-8856-b1e3-c86999b8342d/mzaf_17061172519100564383.plus.aac.p.m4a"
      },
      {
        "songTitle": "U29tZW9uZSBZb3UgTG92ZWQ=",
        "artistName": "TGV3aXMgQ2FwYWxkaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/95/7f/3c/957f3c65-d179-e26e-6517-ebf2b10eaeb8/mzaf_8568102570237224733.plus.aac.p.m4a"
      },
      {
        "songTitle": "RXllcyAoZmVhdC4gTWluZHkgR2xlZGhpbGwgJiBKb2huIE1hcnRpbikgLyBSZWxvYWQgKE1peGVkKQ==",
        "artistName": "S2Fza2FkZSwgU2ViYXN0aWFuIEluZ3Jvc3NvICYgVG9tbXkgVHJhc2g=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e9/dd/4d/e9dd4d6d-ea90-92ab-3aa9-ed4ea057ebe1/mzaf_17015913833331295717.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-06",
    "songs": [
      {
        "songTitle": "Qm95",
        "artistName": "VEhFIEJPWVo=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8c/6e/41/8c6e4174-405d-2346-d8c1-d7a585604bf9/mzaf_337617901347760801.plus.aac.p.m4a"
      },
      {
        "songTitle": "SnVzdCB0aGUgV2F5IFlvdSBBcmU=",
        "artistName": "QnJ1bm8gTWFycw==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/0c/9d/26/0c9d266f-632d-dbda-770d-55cdded795f8/mzaf_18078867637438469059.plus.aac.p.m4a"
      },
      {
        "songTitle": "U29tZXRoaW5nIEp1c3QgTGlrZSBUaGlz",
        "artistName": "VGhlIENoYWluc21va2VycyAmIENvbGRwbGF5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/64/7f/96/647f9601-aa94-3599-6c73-0143510b8b92/mzaf_13538528720942742126.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGltZSAoRnJvbSAiU3RhciIgU2Vhc29uIDIp",
        "artistName": "U3RhciBDYXN0",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/36/16/dc/3616dc01-1c6b-0c04-8134-42007ccf2e09/mzaf_805925952224875291.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-07",
    "songs": [
      {
        "songTitle": "VGltZSAoQWxhbiBXYWxrZXIgUmVtaXgp",
        "artistName": "QWxhbiBXYWxrZXIgJiBIYW5zIFppbW1lcg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/15/9f/6d/159f6d10-eacc-048e-07e3-63a73b4079a7/mzaf_411920904702102782.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3Rhcg==",
        "artistName": "QmF6emk=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/67/2d/29/672d2973-97c8-0fdd-003d-b1e66a1e432c/mzaf_17828511838587327190.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2Vh",
        "artistName": "U29vdGhpbmcgT2FzaXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/99/93/fa/9993faca-c331-32ca-a67d-b577f0f7e8cc/mzaf_18339678258014773573.plus.aac.p.m4a"
      },
      {
        "songTitle": "U3Rhcg==",
        "artistName": "TWl0c2tp",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d6/4b/77/d64b770b-3e2c-bcdf-d48e-f57e0e8e6e0f/mzaf_5066537718600897963.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-08",
    "songs": [
      {
        "songTitle": "QmFkIGF0IExvdmU=",
        "artistName": "SGFsc2V5",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3e/d8/06/3ed8065d-1a50-625b-b995-3e653b32701f/mzaf_6014038911874968955.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmFkIERlY2lzaW9ucw==",
        "artistName": "YmVubnkgYmxhbmNvLCBCVFMgJiBTbm9vcCBEb2dn",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/51/19/05/51190573-d4a1-f046-ba90-1aabe433675d/mzaf_15744422743160199868.plus.aac.p.m4a"
      },
      {
        "songTitle": "V29tYW4=",
        "artistName": "Q2l0eSBhbmQgQ29sb3Vy",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/44/7d/72/447d7286-101b-090f-f3d3-29d4f8834b96/mzaf_15559166815991642710.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFpbiAoU2xlZXAp",
        "artistName": "SGFydmV5IEthcnAsIE1ELCBGQUFQ",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/10/f7/4f/10f74fea-e4b1-96fc-e1b8-d8aed54f66e1/mzaf_7578523360815828499.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-09",
    "songs": [
      {
        "songTitle": "VGhpcyBJcyBIb3cgV2UgRG8gSXQ=",
        "artistName": "TW9udGVsbCBKb3JkYW4=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d7/13/51/d713513c-307f-9089-84b0-b16f396000a8/mzaf_11362731170022474166.plus.aac.p.m4a"
      },
      {
        "songTitle": "R2FuZyBPdmVyIEx1dg==",
        "artistName": "QnJlbnQgRmFpeWF6",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/97/be/22/97be22bb-50d3-6b96-20ed-a9b858ff3e3f/mzaf_4973114352844646292.plus.aac.p.m4a"
      },
      {
        "songTitle": "Qm95IFdpdGggTHV2IChmZWF0LiBIYWxzZXkp",
        "artistName": "QlRT",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0b/8d/84/0b8d84e5-5273-ae21-0c6e-591af6097294/mzaf_16252906211188582302.plus.aac.p.m4a"
      },
      {
        "songTitle": "UmFpbiAtIEhlYWxpbmcgNDMyaHogTXVzaWMgYW5kIE5hdHVyZSBTb3VuZHMgZm9yIFJlbGF4YXRpb24sIERlZXAgU2xlZXAgYW5kIE1lZGl0YXRpb24=",
        "artistName": "U2xlZXAgU291bmRz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/30/61/6530619e-2d44-a948-d829-ad3c7342880d/mzaf_3031262801200570724.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-10",
    "songs": [
      {
        "songTitle": "SXQncyBhIEdyZWF0IERheSB0byBCZSBBbGl2ZQ==",
        "artistName": "VHJhdmlzIFRyaXR0",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/85/82/27/858227b8-dbc4-487a-9789-b9941b813501/mzaf_9336055252570283038.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q29tZSBBbGl2ZQ==",
        "artistName": "SHVnaCBKYWNrbWFuLCBLZWFsYSBTZXR0bGUsIERhbmllbCBFdmVyaWRnZSwgWmVuZGF5YSAmIFRoZSBHcmVhdGVzdCBTaG93bWFuIEVuc2VtYmxl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/07/4b/48/074b4884-40cc-2360-43a6-64c9efc08d24/mzaf_18119671828835820765.plus.aac.p.m4a"
      },
      {
        "songTitle": "TW9vbg==",
        "artistName": "VHVybnN0aWxl",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/dd/76/69/dd7669aa-a8a7-d8b9-aa01-a6e80e675db6/mzaf_8380063837555771898.plus.aac.p.m4a"
      },
      {
        "songTitle": "U291bCAoZmVhdC4gVC5JIEJMQVpFKQ==",
        "artistName": "U2FsbGU=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/65/40/37/6540370e-84d7-fd3e-faaf-5de17dbf7347/mzaf_17734959103429270462.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-08-11",
    "songs": [
      {
        "songTitle": "QnJlYWsgVXAgaW4gdGhlIEVuZA==",
        "artistName": "Q29sZSBTd2luZGVsbA==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/25/33/84/2533847d-f695-8302-d9d6-d4a009d21685/mzaf_12890704381424565308.plus.aac.p.m4a"
      },
      {
        "songTitle": "TG9jYXRpb24=",
        "artistName": "S2hhbGlk",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9e/12/9e/9e129e1c-51b0-e387-c575-7f4452cd94f2/mzaf_4036558847286320225.plus.aac.p.m4a"
      },
      {
        "songTitle": "QlJFQUsgTVkgU09VTA==",
        "artistName": "QmV5b25jw6k=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fa/60/b4/fa60b48b-5906-0a64-6853-92b5c648c953/mzaf_1241862116086704234.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2t5",
        "artistName": "U2lsZW50IFlvZGE=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/b4/87/68/b487687d-25aa-8a8e-91cf-11b9a7734ab3/mzaf_4781010252683956610.plus.aac.p.m4a"
      }
    ]
  }
];

export const connectunesSongs = rawConnectunesSongs.map(day => ({
  ...day,
  songs: day.songs.map(song => ({
    ...song,
    songTitle: atob(song.songTitle),
    artistName: atob(song.artistName)
  }))
}));
