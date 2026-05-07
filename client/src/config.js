// To add new songs, use btoa("Your String") in your browser console to get the base64 value.
// Example: btoa("Bohemian Rhapsody") -> "Qm9oZW1pYW4gUmhhcHNvZHk="
// Note: A test (SongCapacity.test.js) ensures there are always 30 days of songs.
// If the build fails, add more songs here!

const rawSongs = [
  {
    "day": "2026-02-24",
    "songTitle": "Qm9oZW1pYW4gUmhhcHNvZHk=",
    "artistName": "UXVlZW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8f/11/52/8f1152a9-fd5f-0021-f546-b97579c22ec3/mzaf_3962258993076347789.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-02-25",
    "songTitle": "U21lbGxzIExpa2UgVGVlbiBTcGlyaXQ=",
    "artistName": "TmlydmFuYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a6/53/1e/a6531efa-397c-eb73-ecab-9b2790c1471e/mzaf_16440344883389407474.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-02-26",
    "songTitle": "QmlsbGllIEplYW4=",
    "artistName": "TWljaGFlbCBKYWNrc29u",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dc/bc/8a/dcbc8a3e-4ce1-c00d-cc02-eda2212053c7/mzaf_8347559338388601510.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-02-27",
    "songTitle": "SW1hZ2luZQ==",
    "artistName": "Sm9obiBMZW5ub24=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/7d/4e/8c/7d4e8ced-a37b-fab9-c66a-f3b4d6f043cb/mzaf_1566428042492234227.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-02-28",
    "songTitle": "U2hhcGUgb2YgWW91",
    "artistName": "RWQgU2hlZXJhbg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/44/c7/4f/44c74f0d-72dc-6143-d4d0-ba14d661ca0d/mzaf_9566898362556366703.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-01",
    "songTitle": "RGVzcGFjaXRv",
    "artistName": "THVpcyBGb25zaSAmIERhZGR5IFlhbmtlZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/40/5b/e7/405be722-3ec9-ba27-7469-002182d57b39/mzaf_14120258742032474456.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-02",
    "songTitle": "Um9sbGluZyBpbiB0aGUgRGVlcA==",
    "artistName": "QWRlbGU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9f/07/1d/9f071dc7-791c-c869-dfa2-06b25936a287/mzaf_11077490630806345321.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-03",
    "songTitle": "VXB0b3duIEZ1bmsgKGZlYXQuIEJydW5vIE1hcnMp",
    "artistName": "TWFyayBSb25zb24=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/62/e1/98/62e19826-cd13-6eff-390e-dbca502bb7b5/mzaf_8006535252627949661.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-04",
    "songTitle": "QmxpbmRpbmcgTGlnaHRz",
    "artistName": "VGhlIFdlZWtuZA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/b4/8f/17b48f9a-0b93-6bb8-fe1d-3a16623c2cfb/mzaf_9560252727299052414.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-05",
    "songTitle": "RGFuY2UgTW9ua2V5",
    "artistName": "VG9uZXMgQW5kIEk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/43/1a/32/431a3203-7e62-c7b1-0377-824aded16096/mzaf_7471896698419931094.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-06",
    "songTitle": "TWlkbmlnaHQgQ2l0eQ==",
    "artistName": "TTgz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/71/5c/80/715c80fc-ebe4-e713-487c-5bdefee6c6f3/mzaf_3698387428135478316.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-07",
    "songTitle": "SGVhZCBMaWtlIGEgSG9sZQ==",
    "artistName": "TmluZSBJbmNoIE5haWxz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b1/a6/bc/b1a6bc72-2337-6ace-2ae1-d209e87f90be/mzaf_17869559044140579720.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-08",
    "songTitle": "U2NlbmFyaW8gKEVkaXQp",
    "artistName": "QSBUcmliZSBDYWxsZWQgUXVlc3Q=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/92/a6/14/92a6145d-5891-2415-89b3-05cd50d650be/mzaf_12264987532861015556.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-09",
    "songTitle": "RmVsbCBJbiBMb3ZlIFdpdGggYSBHaXJs",
    "artistName": "VGhlIFdoaXRlIFN0cmlwZXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c1/2e/43/c12e437f-8968-d689-ee93-9e8bb4216d60/mzaf_15521926024924695715.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-10",
    "songTitle": "TGV0IE1lIFJpZGU=",
    "artistName": "RHIuIERyZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f4/be/ef/f4beefc7-43d0-4bde-b3f9-e7bf6fe3e13f/mzaf_4349494921468822333.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-11",
    "songTitle": "RXZlcmxvbmc=",
    "artistName": "Rm9vIEZpZ2h0ZXJz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d0/77/17/d07717cb-9977-1cbb-6634-3e598d0c4da6/mzaf_15769952961470333318.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-12",
    "songTitle": "Q29tbW9uIFBlb3BsZQ==",
    "artistName": "UHVscA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/74/69/18/7469188f-7b9e-a200-dae8-8710da15b5f4/mzaf_1292802368291136038.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-13",
    "songTitle": "VGlueSBEYW5jZXI=",
    "artistName": "RWx0b24gSm9obg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/87/c7/4b/87c74b44-17ff-023a-2984-19a0cc6ef56d/mzaf_4130028763967500566.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-14",
    "songTitle": "VGhleSBSZW1pbmlzY2UgT3ZlciBZb3UgKFQuUi5PLlkuKQ==",
    "artistName": "Qy5MLiBTbW9vdGggJiBQZXRlIFJvY2s=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6c/1b/12/6c1b124b-db26-75d2-5cb1-f7a8ced528cd/mzaf_8895577076773702627.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-15",
    "songTitle": "Qm95ei1uLXRoZSBIb29k",
    "artistName": "RWF6eS1F",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/e7/db/d4/e7dbd416-f2c3-1bc1-00db-4637c3a45432/mzaf_4202134312868985044.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-16",
    "songTitle": "Qml6YXJyZSBMb3ZlIFRyaWFuZ2xl",
    "artistName": "TmV3IE9yZGVy",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/dc/e7/a6/dce7a612-2672-34e1-e735-a44218403ed2/mzaf_11026710952020512417.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-17",
    "songTitle": "RXhwcmVzcyBZb3Vyc2VsZg==",
    "artistName": "Ti5XLkE=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c6/d9/67/c6d96705-db12-498b-1352-901e48fc5807/mzaf_14959111065086430688.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-18",
    "songTitle": "V2hlcmUgSXQncyBBdA==",
    "artistName": "QmVjaw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0c/64/14/0c64147c-5188-8ac6-5089-e9b520507f28/mzaf_15152162840102890646.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-19",
    "songTitle": "OTMgJ1RpbCBJbmZpbml0eQ==",
    "artistName": "U291bHMgb2YgTWlzY2hpZWY=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/94/06/67/94066752-e99f-dc82-ae10-38d596955de7/mzaf_17811817848882057179.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-20",
    "songTitle": "UmViZWwgV2l0aG91dCBhIFBhdXNl",
    "artistName": "UHVibGljIEVuZW15",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/41/c0/cb/41c0cbc8-82b4-b3ac-24de-2fec13b4c358/mzaf_11380517908457526088.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-21",
    "songTitle": "QXlvIFRlY2hub2xvZ3kgKGZlYXQuIEp1c3RpbiBUaW1iZXJsYWtlKQ==",
    "artistName": "NTAgQ2VudA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/50/03/da/5003da5c-18ca-fb98-ac71-dbcb9cf7f959/mzaf_470150107164941002.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-22",
    "songTitle": "VGFrZSBNZSBPdXQ=",
    "artistName": "RnJhbnogRmVyZGluYW5k",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/39/0b/12/390b12af-41bf-8587-3bbf-d54ad7c69f63/mzaf_6391656788554881067.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-23",
    "songTitle": "T25jZSBJbiBhIExpZmV0aW1l",
    "artistName": "VGFsa2luZyBIZWFkcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ae/ce/27/aece2737-6bd8-845f-2c16-e25fd959d36a/mzaf_15083503224598525112.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-24",
    "songTitle": "QWdlIG9mIENvbnNlbnQ=",
    "artistName": "TmV3IE9yZGVy",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2a/eb/23/2aeb23fc-7c67-0612-efef-cace5649fc7a/mzaf_3920263434050581191.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-25",
    "songTitle": "TWFwcw==",
    "artistName": "WWVhaCBZZWFoIFllYWhz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fa/6d/b6/fa6db6f5-328d-418d-d65f-e91477b40160/mzaf_13143394283385603955.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-26",
    "songTitle": "SG93IFNvb24gSXMgTm93PyAoMTIiIFZlcnNpb24p",
    "artistName": "VGhlIFNtaXRocw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/b2/15/59/b215593a-6e9a-343d-9dc7-8efa34b1844b/mzaf_6329898282866509920.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-27",
    "songTitle": "Qmx1ZSBNb25kYXk=",
    "artistName": "TmV3IE9yZGVy",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0f/43/1c/0f431c1a-119c-6614-2736-3fbc4c8a597c/mzaf_3646998447648845325.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-28",
    "songTitle": "UmVwdGlsaWE=",
    "artistName": "VGhlIFN0cm9rZXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/dc/fd/e4/dcfde43f-2c21-0778-f32a-f4380293f74f/mzaf_10139901306940368873.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-29",
    "songTitle": "VG9kYXk=",
    "artistName": "VGhlIFNtYXNoaW5nIFB1bXBraW5z",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/07/91/ef/0791ef55-40c7-47e0-f94e-7a309cb7967e/mzaf_13853768609724405792.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-29",
    "songTitle": "RW5qb3kgdGhlIFNpbGVuY2U=",
    "artistName": "RGVwZWNoZSBNb2Rl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2f/ed/58/2fed5854-1c88-31ec-0e98-66b9706dd42d/mzaf_11845437215964282853.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-30",
    "songTitle": "U2hvb2sgT25lcywgUHQuIElJIChJbnN0cnVtZW50YWwp",
    "artistName": "TW9iYiBEZWVw",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1c/e5/a7/1ce5a7c8-c2c8-37a6-2b05-2d698c7d72f2/mzaf_13579522246491547588.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-03-31",
    "songTitle": "UGFzc2luJyBNZSBCeQ==",
    "artistName": "VGhlIFBoYXJjeWRl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/27/a2/85/27a28522-3541-6c02-e81f-d71deee46050/mzaf_9276244445478524858.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-01",
    "songTitle": "U3RyYWlnaHQgT3V0dGEgQ29tcHRvbg==",
    "artistName": "Ti5XLkE=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/45/c3/6e/45c36e06-c594-1b45-bc4d-4fa94ae6230c/mzaf_9922128183683368203.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-02",
    "songTitle": "SnVpY3k=",
    "artistName": "VGhlIE5vdG9yaW91cyBCLkkuRy4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5b/81/21/5b8121d4-1b2b-511a-1f38-0ef4346909b0/mzaf_4190278176982078552.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-03",
    "songTitle": "SGV5IFlhIQ==",
    "artistName": "T3V0a2FzdA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ce/98/c0/ce98c0e5-afa5-f746-032a-fa56ad057762/mzaf_8802440392972724196.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-04",
    "songTitle": "TXIuIEJyaWdodHNpZGU=",
    "artistName": "VGhlIEtpbGxlcnM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b3/95/6e/b3956e14-35f0-937e-afb0-72774d3f613f/mzaf_8359343604382181711.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-05",
    "songTitle": "U2V2ZW4gTmF0aW9uIEFybXk=",
    "artistName": "VGhlIFdoaXRlIFN0cmlwZXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/61/54/97/61549744-a83b-1c4d-58cf-e56b36beb4a7/mzaf_1246579179619940831.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-06",
    "songTitle": "TG9zZSBZb3Vyc2VsZg==",
    "artistName": "RW1pbmVt",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/62/0a/a5/620aa56f-189e-708a-80f0-cebdada3872e/mzaf_7131619873177773332.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-07",
    "songTitle": "Q2FsaWZvcm5pY2F0aW9u",
    "artistName": "UmVkIEhvdCBDaGlsaSBQZXBwZXJz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3a/ab/a7/3aaba764-f557-820f-67fe-df5f0a70870c/mzaf_7660247791812791774.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-08",
    "songTitle": "V29uZGVyd2FsbA==",
    "artistName": "T2FzaXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ab/16/93/ab16933c-6203-3db9-9da9-513ff1c8496d/mzaf_16993612140334549994.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-09",
    "songTitle": "Q3JlZXA=",
    "artistName": "UmFkaW9oZWFk",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8d/e0/bb/8de0bb10-0593-83cc-4d2c-4e9f6ea9b575/mzaf_16440589638018943894.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-10",
    "songTitle": "U3VwZXJzdGl0aW9u",
    "artistName": "U3RldmllIFdvbmRlcg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ff/a3/1a/ffa31a9f-8d91-68a8-e85c-cf8e74284079/mzaf_15951061299338017971.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-11",
    "songTitle": "U3dlZXQgQ2hpbGQgTycgTWluZQ==",
    "artistName": "R3VucyBOJyBSb3Nlcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bc/fd/73/bcfd7312-9f1e-a1b0-524b-cbda6e0c1050/mzaf_248640128027576869.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-12",
    "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
    "artistName": "RWFnbGVz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-13",
    "songTitle": "RG9uJ3QgU3RvcCBCZWxpZXZpbic=",
    "artistName": "Sm91cm5leQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/5c/72/97/5c72974f-6022-f760-ad82-35964fb636b5/mzaf_12752096049347330756.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-14",
    "songTitle": "TGl2aW4nIG9uIGEgUHJheWVy",
    "artistName": "Qm9uIEpvdmk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/fc/64/6c/fc646cf8-6322-09d6-c6b7-0cd148f6a47f/mzaf_14973517811432335325.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-15",
    "songTitle": "TGlrZSBhIFByYXllcg==",
    "artistName": "TWFkb25uYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0b/23/82/0b238289-52e2-2107-5531-181836267ed2/mzaf_6726729811402686020.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-16",
    "songTitle": "U3dlZXQgRHJlYW1zIChBcmUgTWFkZSBvZiBUaGlzKQ==",
    "artistName": "RXVyeXRobWljcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a7/dd/3e/a7dd3e79-dacc-460a-ba25-c9827938a7f1/mzaf_9265723838672937705.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-17",
    "songTitle": "VGFrZSBPbiBNZQ==",
    "artistName": "YS1oYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/f2/03/4f/f2034f41-707f-7111-bc63-e5d3cf7f2240/mzaf_17215043934336702540.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-18",
    "songTitle": "RXZlcnkgQnJlYXRoIFlvdSBUYWtl",
    "artistName": "VGhlIFBvbGljZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/f3/7e/4f/f37e4f0e-4979-c096-6fa0-7ffc054d0c73/mzaf_8433816559382260848.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-19",
    "songTitle": "QW5vdGhlciBPbmUgQml0ZXMgVGhlIER1c3Q=",
    "artistName": "UXVlZW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/47/61/3c/47613c3e-de3e-b2a0-8d36-d05a6619f1d3/mzaf_16109120005998758960.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-20",
    "songTitle": "U3RheWluJyBBbGl2ZQ==",
    "artistName": "QmVlIEdlZXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/dc/8b/52/dc8b524e-e54e-55bb-bf00-03d7b09a7da2/mzaf_14448685722778211602.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-21",
    "songTitle": "SSBXYW5uYSBEYW5jZSB3aXRoIFNvbWVib2R5",
    "artistName": "V2hpdG5leSBIb3VzdG9u",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7b/67/fd/7b67fd07-6a7a-0362-135c-878ac5799f2c/mzaf_11309521725869189721.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-22",
    "songTitle": "RGFuY2luZyBRdWVlbg==",
    "artistName": "QUJCQQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-23",
    "songTitle": "VW5kZXIgUHJlc3N1cmU=",
    "artistName": "UXVlZW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/74/42/5f/74425f2e-4c63-0514-951a-891ad9753097/mzaf_3082293095615590695.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-24",
    "songTitle": "QWZyaWNh",
    "artistName": "VG90bw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/12/e5/ba/12e5ba45-05c1-7060-25a8-c9b718e7f6e8/mzaf_4488601364870711408.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-25",
    "songTitle": "U3VtbWVyIG9mICc2OQ==",
    "artistName": "QnJ5YW4gQWRhbXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a7/3e/b2/a73eb26b-db02-90f3-0ac6-d0a3170fa876/mzaf_14223839568238436580.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-26",
    "songTitle": "QWxsIFN0YXI=",
    "artistName": "U21hc2ggTW91dGg=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-27",
    "songTitle": "VGFrZSBNZSBIb21lLCBDb3VudHJ5IFJvYWRz",
    "artistName": "Sm9obiBEZW52ZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ed/e9/47/ede9473f-3334-29c4-21f5-dcd3aa3c029e/mzaf_8295710681386150675.plus.aac.p.m4a",
    "offset": 0
  },
{
    "day": "2026-04-28",
    "songTitle": "VGhlIFJlYWwgU2xpbSBTaGFkeQ==",
    "artistName": "RW1pbmVt",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c7/72/db/c772dbca-97f5-af21-e9a8-9b794973b17f/mzaf_7645639045496345300.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-29",
    "songTitle": "U3VwZXIgTWFyaW8gQnJvcy4gVGhlbWU=",
    "artistName": "S29qaSBLb25kbw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/44/07/33/44073398-6d85-0d5a-78e3-c9d44abdb51b/mzaf_8342090457889497650.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-30",
    "songTitle": "Li4uQmFieSBPbmUgTW9yZSBUaW1l",
    "artistName": "QnJpdG5leSBTcGVhcnM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/49/6a/b2/496ab286-3c2d-91f9-2d83-2dc2d7d0ed39/mzaf_9080140052391941165.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-01",
    "songTitle": "U3RhciBXYXJzIE1haW4gVGl0bGU=",
    "artistName": "Sm9obiBXaWxsaWFtcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/22/70/d3/2270d3e9-b58f-5211-b096-dd32426144c1/mzaf_1330954041442566776.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-02",
    "songTitle": "SW4gRGEgQ2x1Yg==",
    "artistName": "NTAgQ2VudA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/15/89/7e/15897ea5-b0a0-4c1f-3f64-559533df42b1/mzaf_10604019280667552271.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-03",
    "songTitle": "RHJhZ29uYm9ybiAoU2t5cmltKQ==",
    "artistName": "SmVyZW15IFNvdWxl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/e1/f6/74/e1f6743e-3def-9555-70c6-669174974dc8/mzaf_15684803984770121721.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-04",
    "songTitle": "QnllIEJ5ZSBCeWU=",
    "artistName": "TlNZTkM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6a/a8/c2/6aa8c264-c7f8-5db7-4b52-808abf96156d/mzaf_15046152716316545247.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-05",
    "songTitle": "SGUncyBhIFBpcmF0ZQ==",
    "artistName": "SGFucyBaaW1tZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c4/5a/62/c45a628a-fc1c-adb1-6f77-82b698543779/mzaf_589951104999006345.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-06",
    "songTitle": "RHJvcCBJdCBMaWtlIEl0J3MgSG90",
    "artistName": "U25vb3AgRG9nZw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8e/fb/27/8efb27a7-db76-4a10-d313-e005b58571c4/mzaf_12986363586142645722.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-07",
    "songTitle": "SGFsbw==",
    "artistName": "TWFydGluIE8nRG9ubmVsbCAmIE1pY2hhZWwgU2FsdmF0b3Jp",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/cc/3e/09/cc3e09c9-4f96-f2bd-da58-61ca0f531d54/REPLACE_ME",
    "offset": 0
  },
  {
    "day": "2026-05-08",
    "songTitle": "SSBXYW50IEl0IFRoYXQgV2F5",
    "artistName": "QmFja3N0cmVldCBCb3lz",
    "audioUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video116/v4/c5/9d/2c/c59d2cec-186a-b1a7-c6b1-1ed0d72bdf03/mzvf_10199375276816172150.1920w.h264lc.U.p.m4v",
    "offset": 0
  },
  {
    "day": "2026-05-09",
    "songTitle": "Q29uY2VybmluZyBIb2JiaXRz",
    "artistName": "SG93YXJkIFNob3Jl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/df/fd/da/dffddaac-0bd3-27f0-a9f6-90c34b9ea914/mzaf_1515801996403728735.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-10",
    "songTitle": "R2V0IFVyIEZyZWFrIE9u",
    "artistName": "TWlzc3kgRWxsaW90dA==",
    "audioUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video125/v4/7f/a8/94/7fa89458-8b86-ba33-5fea-3cf1ef715241/mzvf_4681255040239020211.640x480.h264lc.U.p.m4v",
    "offset": 0
  },
  {
    "day": "2026-05-11",
    "songTitle": "VGV0cmlzIFRoZW1l",
    "artistName": "SGlyb2thenUgVGFuYWth",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2b/5a/d4/2b5ad42f-5ea5-7908-510c-fcd377e8d1b7/mzaf_6543548603633188261.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-12",
    "songTitle": "U2luY2UgVSBCZWVuIEdvbmU=",
    "artistName": "S2VsbHkgQ2xhcmtzb24=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8d/e7/24/8de72427-cabf-27c4-563f-5be2e83da122/mzaf_8282882240981789361.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-13",
    "songTitle": "VGltZQ==",
    "artistName": "SGFucyBaaW1tZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/94/9c/89/949c8995-41f8-d3c1-90eb-81c10b54133b/mzaf_8252792899119007978.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-14",
    "songTitle": "RG9vIFdvcCAoVGhhdCBUaGluZyk=",
    "artistName": "TGF1cnluIEhpbGw=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2e/8a/f9/2e8af902-216a-1460-6a03-fb5f18db1274/mzaf_9149843114509207429.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-15",
    "songTitle": "TWVnYWxvdmFuaWE=",
    "artistName": "VG9ieSBGb3g=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/25/ed/8b/25ed8b44-fcbf-e901-4080-2b038334e6fc/mzaf_3554902685686560817.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-16",
    "songTitle": "U2s4ZXIgQm9p",
    "artistName": "QXZyaWwgTGF2aWduZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/e5/5d/cf/e55dcfa0-7512-6287-e89d-741fe71080c7/mzaf_7785083572268777793.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-17",
    "songTitle": "SnVyYXNzaWMgUGFyayBUaGVtZQ==",
    "artistName": "Sm9obiBXaWxsaWFtcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5d/83/a2/5d83a2d2-d954-a453-3caf-8bdb06203ec3/mzaf_17931228891307425570.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-18",
    "songTitle": "TnV0aGluJyBCdXQgQSAnRycgVGhhbmc=",
    "artistName": "RHIuIERyZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/da/23/47/da234798-c8dc-a0c6-ae99-cd29c054645e/mzaf_7675979424653060823.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-19",
    "songTitle": "R2VydWRvIFZhbGxleQ==",
    "artistName": "S29qaSBLb25kbw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/cd/43/ca/cd43ca97-9407-a46f-abc5-42a12795cb10/mzaf_656195245554877872.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-20",
    "songTitle": "SGlwcyBEb24ndCBMaWU=",
    "artistName": "U2hha2lyYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ac/c7/61/acc7619f-c1e3-e0a5-df9b-0329a35af062/mzaf_13106936727189536738.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-21",
    "songTitle": "UmFpZGVycyBNYXJjaA==",
    "artistName": "Sm9obiBXaWxsaWFtcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2d/8e/a6/2d8ea6df-d2d4-df0c-e20d-dd26b7691aae/mzaf_14815561527577254419.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-22",
    "songTitle": "Tm8gRGlnZ2l0eQ==",
    "artistName": "QmxhY2tzdHJlZXQ=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/96/d7/27/96d727a5-e22b-a526-cec5-5d185180c8a0/mzaf_8685114639537905202.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-23",
    "songTitle": "SG9sbG93IEtuaWdodCBNYWluIFRoZW1l",
    "artistName": "Q2hyaXN0b3BoZXIgTGFya2lu",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f3/50/69/f35069d7-297c-a2f0-7aa8-237af3ec37bc/mzaf_8386343521746556599.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-24",
    "songTitle": "SG9sbGFiYWNrIEdpcmw=",
    "artistName": "R3dlbiBTdGVmYW5p",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e6/3c/42/e63c428f-4286-f714-9a6f-41bace5f8a04/mzaf_13346128773158913273.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-25",
    "songTitle": "Q29ybmZpZWxkIENoYXNl",
    "artistName": "SGFucyBaaW1tZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3a/ee/23/3aee2300-f6f7-a006-e20f-28092e814cbe/mzaf_1624587954644600228.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-26",
    "songTitle": "UmVndWxhdGU=",
    "artistName": "V2FycmVuIEc=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ba/10/43/ba10439c-7f56-d383-94fb-760c7c9c50bb/mzaf_5624041190120364871.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-27",
    "songTitle": "R3JlZW4gSGlsbCBab25l",
    "artistName": "TWFzYXRvIE5ha2FtdXJh",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8f/8e/b8/8f8eb8d6-751e-1054-b09d-029b5ce34a1c/mzaf_4608721805618108461.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-28",
    "songTitle": "UHJvbWlzY3VvdXM=",
    "artistName": "TmVsbHkgRnVydGFkbw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/03/41/e2/0341e2ae-d84b-20bf-7179-204867c7907a/mzaf_1787596399060792567.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-29",
    "songTitle": "SGVkd2lnJ3MgVGhlbWU=",
    "artistName": "Sm9obiBXaWxsaWFtcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/43/85/18/438518d0-8fd5-1a15-18c0-aad9f814845e/mzaf_11676418529425576487.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-30",
    "songTitle": "TW8gTW9uZXkgTW8gUHJvYmxlbXM=",
    "artistName": "VGhlIE5vdG9yaW91cyBCLkkuRy4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ab/a1/43/aba14361-6699-fb45-805f-0b93a33bf512/mzaf_17801802742996893988.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-31",
    "songTitle": "TWlpIENoYW5uZWwgVGhlbWU=",
    "artistName": "S2F6dW1pIFRvdGFrYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/96/00/29/960029e5-83d7-69f5-e6d1-772330a53e4c/mzaf_17306011222573542084.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-01",
    "songTitle": "R2VuaWUgaW4gYSBCb3R0bGU=",
    "artistName": "Q2hyaXN0aW5hIEFndWlsZXJh",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e9/63/7c/e9637c84-3cbe-ad95-a5be-b6962ed54e08/mzaf_11300153256112368673.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-02",
    "songTitle": "R29ubmEgRmx5IE5vdyBSb2NreQ==",
    "artistName": "QmlsbCBDb250aQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/29/51/7f/29517f62-b7e2-b7e2-4e90-e36e3621f477/mzaf_9744106977063652586.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-03",
    "songTitle": "RmFtaWx5IEFmZmFpcg==",
    "artistName": "TWFyeSBKLiBCbGlnZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/48/13/7b/48137b2d-170f-bc6d-26a6-9c859d9ec10b/mzaf_8383012881809014007.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-04",
    "songTitle": "R3VpbGUncyBUaGVtZQ==",
    "artistName": "WW9rbyBTaGltb211cmE=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/09/ff/98/09ff9880-95ec-047f-266d-c6dd65dc9396/mzaf_4022057153667394012.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-05",
    "songTitle": "RG9uJ3QgU3BlYWs=",
    "artistName": "Tm8gRG91YnQ=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/eb/d3/dd/ebd3dd7b-ef82-0855-54b0-3c978e7f1594/mzaf_13350123702531292562.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-06",
    "songTitle": "TXkgSGVhcnQgV2lsbCBHbyBPbg==",
    "artistName": "Q2VsaW5lIERpb24=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ad/10/9c/ad109c62-aa02-8345-bfcc-b50f98345475/mzaf_3279697888712975539.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-07",
    "songTitle": "SXQgV2FzIEEgR29vZCBEYXk=",
    "artistName": "SWNlIEN1YmU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/12/ae/72/12ae7234-007e-e1c9-a6a1-3fb932647f1c/mzaf_12840383995581301513.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-08",
    "songTitle": "T25lLVdpbmdlZCBBbmdlbCBGaW5hbCBGYW50YXN5IFZJSQ==",
    "artistName": "Tm9idW8gVWVtYXRzdQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/94/a5/5d/94a55d02-ff61-880f-2fd9-74136f4fb1f2/mzaf_5399793743448038487.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-09",
    "songTitle": "U21vb3Ro",
    "artistName": "U2FudGFuYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ac/77/6b/ac776b92-9955-683b-b3c2-3d0aca3ce8f1/mzaf_13380279657797242913.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-10",
    "songTitle": "SSBXaWxsIEFsd2F5cyBMb3ZlIFlvdQ==",
    "artistName": "V2hpdG5leSBIb3VzdG9u",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/03/d2/1a/03d21aca-c69e-09af-03ef-118004e68ab5/mzaf_17408932698913708736.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-11",
    "songTitle": "UG9ueQ==",
    "artistName": "R2ludXdpbmU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ec/ba/a4/ecbaa46d-f4b4-f42f-1a73-ddd6940fe70b/mzaf_11029564969896829872.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-12",
    "songTitle": "WmVsZGEncyBMdWxsYWJ5",
    "artistName": "S29qaSBLb25kbw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cd/0b/e4/cd0be40c-59a8-9433-7ad2-342ad74c5f80/mzaf_13571377044766195139.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-13",
    "songTitle": "WW91IE91Z2h0YSBLbm93",
    "artistName": "QWxhbmlzIE1vcmlzc2V0dGU=",
    "audioUrl": "https://video-ssl.itunes.apple.com/itunes-assets/Video125/v4/0e/e0/93/0ee09347-48cf-40f8-7217-1436d29d2dbb/mzvf_9197316634714725259.640x480.h264lc.U.p.m4v",
    "offset": 0
  },
  {
    "day": "2026-06-14",
    "songTitle": "Q2lyY2xlIG9mIExpZmU=",
    "artistName": "RWx0b24gSm9obg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/bc/84/da/bc84da28-51b4-ce85-9359-baa37d8fc305/mzaf_1966543977384056213.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-15",
    "songTitle": "UmV0dXJuIG9mIHRoZSBNYWNr",
    "artistName": "TWFyayBNb3JyaXNvbg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/ff/1a/db/ff1adb59-b422-d12f-1b17-3c8555ad0bd1/mzaf_16736176348735064112.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-16",
    "songTitle": "UG9rZW1vbiBUaGVtZQ==",
    "artistName": "SmFzb24gUGFpZ2U=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/84/52/c1/8452c1cb-f507-e9fc-ff4d-08fbe16cf568/mzaf_930996474611003179.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-17",
    "songTitle": "QmFza2V0IENhc2U=",
    "artistName": "R3JlZW4gRGF5",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c2/c9/0f/c2c90fef-f994-111d-2afc-17747de6bc03/mzaf_8917420879191568081.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-18",
    "songTitle": "R2hvc3RidXN0ZXJz",
    "artistName": "UmF5IFBhcmtlciBKci4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/50/6b/ee/506beefd-800d-ee66-543f-b5f18b56f67e/mzaf_4307548334315021038.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-19",
    "songTitle": "WWVhaCE=",
    "artistName": "VXNoZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/94/52/3c/94523c88-f5f9-16f4-dbd7-f284ca168048/mzaf_7184891920196479048.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-20",
    "songTitle": "U3VwZXIgU21hc2ggQnJvcy4gQnJhd2wgTWFpbiBUaGVtZQ==",
    "artistName": "Tm9idW8gVWVtYXRzdQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0d/68/84/0d688494-0880-0118-9d41-f84b61c492ec/mzaf_4525387946603201375.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-21",
    "songTitle": "QWxsIFRoZSBTbWFsbCBUaGluZ3M=",
    "artistName": "QmxpbmstMTgy",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/98/22/8d/98228d8c-b66b-ef27-c97f-f44c4abb632e/mzaf_1096879951067266311.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-22",
    "songTitle": "QXhlbCBG",
    "artistName": "SGFyb2xkIEZhbHRlcm1leWVy",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/9a/42/66/9a426626-fbfb-b6f1-9b59-50f026ac6e90/mzaf_13389420157367139701.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-23",
    "songTitle": "Q3JhenkgaW4gTG92ZQ==",
    "artistName": "QmV5b25jw6k=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b5/2a/4f/b52a4fcd-0628-cb38-c8ab-a697c11a9175/mzaf_1541321636664021445.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-24",
    "songTitle": "RXppbydzIEZhbWlseQ==",
    "artistName": "SmVzcGVyIEt5ZA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/1f/93/52/1f93524f-78eb-4017-efcc-6767eb46a608/mzaf_6866951080243495695.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-25",
    "songTitle": "VGhlIE1pZGRsZQ==",
    "artistName": "SmltbXkgRWF0IFdvcmxk",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fd/d5/6e/fdd56edc-082e-0612-2fc9-2fa9ed797a8d/mzaf_8473238736295829666.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-26",
    "songTitle": "R2FtZSBvZiBUaHJvbmVzIE1haW4gVGl0bGU=",
    "artistName": "UmFtaW4gRGphd2FkaQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cb/92/90/cb92902c-c2ea-f522-af53-188ea787e9eb/mzaf_1944123792286238815.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-27",
    "songTitle": "R2FuZ3N0YSdzIFBhcmFkaXNl",
    "artistName": "Q29vbGlv",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/56/58/f7/5658f7ec-2bb5-0ef0-0f9f-5adcd1a96363/mzaf_7433975646947882823.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-28",
    "songTitle": "SG9ybmV0",
    "artistName": "Q2hyaXN0b3BoZXIgTGFya2lu",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d8/e4/f1/d8e4f124-1de1-5af0-e784-1adf6afff1aa/mzaf_14879622008978842655.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-29",
    "songTitle": "RmF0IExpcA==",
    "artistName": "U3VtIDQx",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/4f/bb/63/4fbb63dc-140b-2371-d3f9-5b9e1a9f80cc/mzaf_3122477036994646893.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-30",
    "songTitle": "QmFjayB0byB0aGUgRnV0dXJlIFRoZW1l",
    "artistName": "QWxhbiBTaWx2ZXN0cmk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2a/9f/44/2a9f445b-680f-6033-cf5c-a37e13083283/mzaf_10536028076646424887.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-01",
    "songTitle": "U2F5IE15IE5hbWU=",
    "artistName": "RGVzdGlueSdzIENoaWxk",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c4/e9/31/c4e9314c-ef3f-3f7c-387c-132589559784/mzaf_8926786703573931171.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-02",
    "songTitle": "QXRobGV0aWMgVGhlbWU=",
    "artistName": "S29qaSBLb25kbw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bd/c4/79/bdc4790f-0a54-91d5-9ffe-745065f381e5/mzaf_6491729340091945873.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-03",
    "songTitle": "TXkgT3duIFdvcnN0IEVuZW15",
    "artistName": "TGl0",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4a/ba/b2/4abab272-778b-6ad4-00e6-bde369cf32d4/mzaf_10753476092577773276.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-04",
    "songTitle": "QmF0bWFuIFRoZW1l",
    "artistName": "RGFubnkgRWxmbWFu",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1b/74/52/1b7452ad-ff58-6b82-93a9-be12c8a340e9/mzaf_16607255093981539781.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-05",
    "songTitle": "SG90IEluIEhlcnJl",
    "artistName": "TmVsbHk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1b/ce/48/1bce48bf-49c2-eca0-7ca5-2cd614e12e2d/mzaf_7912378696661820444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-06",
    "songTitle": "U3RpY2tlcmJ1c2ggU3ltcGhvbnk=",
    "artistName": "RGF2aWQgV2lzZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b9/cf/56/b9cf560b-76bf-cc9c-feb4-d6400d52cb3b/mzaf_7197201423463668298.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-07",
    "songTitle": "U3RhY3kncyBNb20=",
    "artistName": "Rm91bnRhaW5zIG9mIFdheW5l",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/41/92/1f/41921f95-dfb3-8057-3944-b7022b716ebe/mzaf_887188329895614171.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-08",
    "songTitle": "VGhlIEluY3JlZGlibGVz",
    "artistName": "TWljaGFlbCBHaWFjY2hpbm8=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1f/8d/7a/1f8d7ab0-1d70-2fdb-a65d-33a92862667a/mzaf_5896637446737457813.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-09",
    "songTitle": "Q2hhbmdlcw==",
    "artistName": "MlBhYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0c/b4/62/0cb462cb-0b46-8d1c-30dc-1b08a4895f08/mzaf_8261874480187702568.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-10",
    "songTitle": "U3BpcmFsIE1vdW50YWlu",
    "artistName": "R3JhbnQgS2lya2hvcGU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e1/a5/a6/e1a5a683-ef5b-130b-6698-15b600f1e3a1/mzaf_14857749812948128529.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-11",
    "songTitle": "T2NlYW4gQXZlbnVl",
    "artistName": "WWVsbG93Y2FyZA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/10/e7/68/10e76877-174d-7a42-b002-148824891b2f/mzaf_8791734343275536748.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-12",
    "songTitle": "Q2hhcmlvdHMgb2YgRmlyZQ==",
    "artistName": "VmFuZ2VsaXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/36/83/7d/36837d9e-6c05-bcd7-9448-e63f38c38258/mzaf_2509456129926284588.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-13",
    "songTitle": "SXQgV2Fzbid0IE1l",
    "artistName": "U2hhZ2d5",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/18/75/3f/18753f2d-57fc-46a4-d46e-28d5c333c2c5/mzaf_7595555177497347321.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-14",
    "songTitle": "TGFzdCBTdXJwcmlzZQ==",
    "artistName": "U2hvamkgTWVndXJv",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cc/95/4c/cc954c11-3e4f-eb21-ce62-2d9b0237e344/mzaf_2933335903732186493.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-15",
    "songTitle": "VHJ1bHkgTWFkbHkgRGVlcGx5",
    "artistName": "U2F2YWdlIEdhcmRlbg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/0b/44/17/0b44175e-9ed1-25f3-bd57-f435f8d4dd5f/mzaf_12625965000508513358.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-16",
    "songTitle": "V2VzdHdvcmxkIFRoZW1l",
    "artistName": "UmFtaW4gRGphd2FkaQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ce/de/8b/cede8b3f-4137-c6f1-e17a-3b0f619f7ed4/mzaf_9634988424484271208.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-17",
    "songTitle": "Tm8gU2NydWJz",
    "artistName": "VExD",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c9/64/38/c964385e-f18a-fd99-638c-76d4f9bdd4e2/mzaf_4744709234124158764.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-18",
    "songTitle": "UGlnc3RlcA==",
    "artistName": "TGVuYSBSYWluZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/81/2c/2a/812c2ae5-2200-5fdf-27ea-097daa58cbd8/mzaf_4482387053155697418.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-19",
    "songTitle": "SXJpcw==",
    "artistName": "R29vIEdvbyBEb2xscw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/60/17/35/60173512-3d5c-1d6f-549e-d8ddafa93e07/mzaf_5281658494050788067.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-20",
    "songTitle": "U3VwZXJtYW4gVGhlbWU=",
    "artistName": "Sm9obiBXaWxsaWFtcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/26/bb/cb/26bbcb3e-564c-f0e6-4421-04e5895bc89a/mzaf_1312189582324121964.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-21",
    "songTitle": "V2hlcmUgSXMgVGhlIExvdmU/",
    "artistName": "QmxhY2sgRXllZCBQZWFz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ed/f9/a3/edf9a3ab-e683-b443-9293-64a183165eac/mzaf_16881899555193622268.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-22",
    "songTitle": "U3dlZGVu",
    "artistName": "QzQxOA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/af/31/01/af310107-0572-ec8a-0e8b-d99035407230/mzaf_13152283240780583171.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-23",
    "songTitle": "VG9ybg==",
    "artistName": "TmF0YWxpZSBJbWJydWdsaWE=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/57/ed/8f/57ed8f5c-f5fd-6872-5ced-c0d508f0918c/mzaf_18336685248537113596.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-24",
    "songTitle": "VGhlIEdvb2QsIHRoZSBCYWQgYW5kIHRoZSBVZ2x5",
    "artistName": "RW5uaW8gTW9ycmljb25l",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/80/e4/e5/80e4e587-4c20-a8d2-b64f-f20a152a6860/mzaf_6952850442416805453.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-25",
    "songTitle": "TG9uZWx5",
    "artistName": "QWtvbg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/86/54/0d/86540d69-0859-a791-5257-6a2784f81095/mzaf_1649354300942287070.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-26",
    "songTitle": "TmFzY2VuY2U=",
    "artistName": "QXVzdGluIFdpbnRvcnk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e2/11/c1/e211c1d2-2fc4-c845-140c-f608b5b504f8/mzaf_14878261282696473631.plus.aac.p.m4a",
    "offset": 0
  }
];

export const songs = rawSongs.map(song => ({
  ...song,
  songTitle: atob(song.songTitle),
  artistName: atob(song.artistName)
}));
