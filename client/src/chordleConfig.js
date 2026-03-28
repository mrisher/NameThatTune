const rawChordleSongs = [
  {
    "day": "2026-02-24",
    "songs": [
      {
        "songTitle": "SSBXaWxsIEFsd2F5cyBMb3ZlIFlvdQ==",
        "artistName": "V2hpdG5leSBIb3VzdG9u",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/03/d2/1a/03d21aca-c69e-09af-03ef-118004e68ab5/mzaf_17408932698913708736.plus.aac.p.m4a"
      },
      {
        "songTitle": "Q3JhenkgSW4gTG92ZQ==",
        "artistName": "QmV5b25jZQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b5/2a/4f/b52a4fcd-0628-cb38-c8ab-a697c11a9175/mzaf_1541321636664021445.plus.aac.p.m4a"
      },
      {
        "songTitle": "VGhyaWxsZXI=",
        "artistName": "TWljaGFlbCBKYWNrc29u",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/58/8c/cb/588ccb9a-ab79-4a38-43b5-d4c24ea42859/mzaf_2083607504726567992.plus.aac.p.m4a"
      },
      {
        "songTitle": "VXB0b3duIEZ1bms=",
        "artistName": "TWFyayBSb25zb24=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/62/e1/98/62e19826-cd13-6eff-390e-dbca502bb7b5/mzaf_8006535252627949661.plus.aac.p.m4a"
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
