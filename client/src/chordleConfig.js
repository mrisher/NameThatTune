const rawChordleSongs = [
  {
    "day": "2026-03-28",
    "songs": [
      {
        "songTitle": "Q2FsaWZvcm5pYSBHdXJscw==",
        "artistName": "S2F0eSBQZXJyeQ==",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b7/77/8b/b7778baa-6756-e378-ce53-936af6d6a39e/mzaf_13732224797596299990.plus.aac.p.m4a"
      },
      {
        "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
        "artistName": "RWFnbGVz",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a"
      },
      {
        "songTitle": "QmFkIFJvbWFuY2U=",
        "artistName": "TGFkeSBHYWdh",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e7/a4/24/e7a424e8-d38a-9903-a981-fd6985764d8a/mzaf_2758786402489249578.plus.aac.p.m4a"
      },
      {
        "songTitle": "SGFwcHk=",
        "artistName": "UGhhcnJlbGwgV2lsbGlhbXM=",
        "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4c/ba/89/4cba89f1-1a8a-3f33-b3ac-d88bcad8b996/mzaf_17135561476274403451.plus.aac.p.m4a"
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
