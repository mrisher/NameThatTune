const rawChordleSongs = [
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
    "day": "2026-02-25",
    "songs": [
      {
        "songTitle": "QWxsIE5pZ2h0IExvbmc=",
        "artistName": "TGlvbmVsIFJpY2hpZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1c/e5/a7/1ce5a7c8-c2c8-37a6-2b05-2d698c7d72f2/mzaf_13579522246491547588.plus.aac.p.m4a"
      },
      {
        "songTitle": "WW91IFNob29rIE1lIEFsbCBOaWdodCBMb25n",
        "artistName": "QUMvREM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9f/07/1d/9f071dc7-791c-c869-dfa2-06b25936a287/mzaf_11077490630806345321.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmlsbGllIEplYW4=",
        "artistName": "TWljaGFlbCBKYWNrc29u",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dc/bc/8a/dcbc8a3e-4ce1-c00d-cc02-eda2212053c7/mzaf_8347559338388601510.plus.aac.p.m4a"
      },
      {
        "songTitle": "U2hhcGUgb2YgWW91",
        "artistName": "RWQgU2hlZXJhbg==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/c7/4f/44c74f0d-72dc-6143-d4d0-ba14d661ca0d/mzaf_9566898362556366703.plus.aac.p.m4a"
      }
    ]
  },
  {
    "day": "2026-02-26",
    "songs": [
      {
        "songTitle": "TGlrZSBBIFByYXllcg==",
        "artistName": "TWFkb25uYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fa/6d/b6/fa6db6f5-328d-418d-d65f-e91477b40160/mzaf_13143394283385603955.plus.aac.p.m4a"
      },
      {
        "songTitle": "U21lbGxzIExpa2UgVGVlbiBTcGlyaXQ=",
        "artistName": "TmlydmFuYQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a6/53/1e/a6531efa-397c-eb73-ecab-9b2790c1471e/mzaf_16440344883389407474.plus.aac.p.m4a"
      },
      {
        "songTitle": "SW1hZ2luZQ==",
        "artistName": "Sm9obiBMZW5ub24=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7d/4e/8c/7d4e8ced-a37b-fab9-c66a-f3b4d6f043cb/mzaf_1566428042492234227.plus.aac.p.m4a"
      },
      {
        "songTitle": "RGVzcGFjaXRv",
        "artistName": "THVpcyBGb25zaQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/40/5b/e7/405be722-3ec9-ba27-7469-002182d57b39/mzaf_14120258742032474456.plus.aac.p.m4a"
      }
    ]
  }
];

export const chordleSongs = rawChordleSongs.map(day => ({
  ...day,
  songs: day.songs.map(song => ({
    ...song,
    songTitle: atob(song.songTitle),
    artistName: atob(song.artistName)
  }))
}));
