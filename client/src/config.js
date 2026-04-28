// To add new songs, use btoa("Your String") in your browser console to get the base64 value.
// Example: btoa("Bohemian Rhapsody") -> "Qm9oZW1pYW4gUmhhcHNvZHk="
// Note: A test (SongCapacity.test.js) ensures there are always 30 days of songs.
// If the build fails, add more songs here!

const rawSongs = [
  {
    "day": "2026-02-24",
    "songTitle": "Qm9oZW1pYW4gUmhhcHNvZHk=",
    "artistName": "UXVlZW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8f/11/52/8f1152a9-fd5f-0021-f546-b97579c22ec3/mzaf_3962258993076347789.plus.aac.p.m4a",
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
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7d/4e/8c/7d4e8ced-a37b-fab9-c66a-f3b4d6f043cb/mzaf_1566428042492234227.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-02-28",
    "songTitle": "U2hhcGUgb2YgWW91",
    "artistName": "RWQgU2hlZXJhbg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/c7/4f/44c74f0d-72dc-6143-d4d0-ba14d661ca0d/mzaf_9566898362556366703.plus.aac.p.m4a",
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
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/87/c7/4b/87c74b44-17ff-023a-2984-19a0cc6ef56d/mzaf_4130028763967500566.plus.aac.p.m4a",
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
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e7/db/d4/e7dbd416-f2c3-1bc1-00db-4637c3a45432/mzaf_4202134312868985044.plus.aac.p.m4a",
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
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ce/98/c0/ce98c0e5-afa5-f746-032a-fa56ad057762/mzaf_8802440392972724196.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-04",
    "songTitle": "TXIuIEJyaWdodHNpZGU=",
    "artistName": "VGhlIEtpbGxlcnM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b3/95/6e/b3956e14-35f0-937e-afb0-72774d3f613f/mzaf_8359343604382181711.plus.aac.p.m4a",
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
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ab/16/93/ab16933c-6203-3db9-9da9-513ff1c8496d/mzaf_16993612140334549994.plus.aac.p.m4a",
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
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fc/64/6c/fc646cf8-6322-09d6-c6b7-0cd148f6a47f/mzaf_14973517811432335325.plus.aac.p.m4a",
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
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f2/03/4f/f2034f41-707f-7111-bc63-e5d3cf7f2240/mzaf_17215043934336702540.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-18",
    "songTitle": "RXZlcnkgQnJlYXRoIFlvdSBUYWtl",
    "artistName": "VGhlIFBvbGljZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f3/7e/4f/f37e4f0e-4979-c096-6fa0-7ffc054d0c73/mzaf_8433816559382260848.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-19",
    "songTitle": "QW5vdGhlciBPbmUgQml0ZXMgVGhlIER1c3Q=",
    "artistName": "UXVlZW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/47/61/3c/47613c3e-de3e-b2a0-8d36-d05a6619f1d3/mzaf_16109120005998758960.plus.aac.p.m4a",
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
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a",
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
    "songTitle": "R28gWW91ciBPd24gV2F5",
    "artistName": "RmxlZXR3b29kIE1hYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/81/1b/0e/811b0e3a-2693-9934-9994-999499949994/mzaf_1354444444444444444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-29",
    "songTitle": "RHJlYW1z",
    "artistName": "RmxlZXR3b29kIE1hYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7e/8e/8e/7e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e/mzaf_1354444444444444444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-04-30",
    "songTitle": "U3dlZXQgQ2Fyb2xpbmU=",
    "artistName": "TmVpbCBEaWFtb25k",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0c/66/66/0c666666-6666-6666-6666-666666666666/mzaf_1354444444444444444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-01",
    "songTitle": "Um9ja2V0IE1hbg==",
    "artistName": "RWx0b24gSm9obg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/09/33/33/09333333-3333-3333-3333-333333333333/mzaf_1354444444444444444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-02",
    "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
    "artistName": "MlBhYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-03",
    "songTitle": "U3BhY2UgT2RkaXR5",
    "artistName": "RGF2aWQgQm93aWU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-04",
    "songTitle": "UHVycGxlIFJhaW4=",
    "artistName": "UHJpbmNl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-05",
    "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
    "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-06",
    "songTitle": "QmxhY2sgRG9n",
    "artistName": "TGVkIFplcHBlbGlu",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-07",
    "songTitle": "V2lsZCBIdXJzZXM=",
    "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-08",
    "songTitle": "UGluayBQb255IENsdWI=",
    "artistName": "Q2hhcHBlbGwgUm9hbg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/25/87/132587f6-b2b2-2caa-7993-378cfc9014cd/mzaf_9232770372342433625.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-09",
    "songTitle": "RHJpZnQgQXdheQ==",
    "artistName": "RG9iaWUgR3JheQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fc/ae/d9/fcaed9a9-6e9c-3070-0bc1-5ed0dea7df24/mzaf_7625052026903346575.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-10",
    "songTitle": "VGhlIE1vdHRv",
    "artistName": "VGnDq3N0byAmIEF2YSBNYXg=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/0d/ed/ef/0dedef85-d1e0-636c-9456-4142941b8abf/mzaf_11507681080634107077.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-11",
    "songTitle": "U2FudGEgVGVsbCBNZQ==",
    "artistName": "QXJpYW5hIEdyYW5kZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/45/b1/b0/45b1b0d3-6a1b-885a-2b5b-8cd1d596b3f6/mzaf_538323430594511559.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-12",
    "songTitle": "TGVmdCBhbmQgUmlnaHQ=",
    "artistName": "Q2hhcmxpZSBQdXRoICYgSnVuZyBLb29r",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/8d/9e/9c/8d9e9cd1-4e3e-ef1c-67fa-ed0bf39b7705/mzaf_8226823477234168289.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-13",
    "songTitle": "U2V4eSBhbmQgSSBLbm93IEl0",
    "artistName": "UG93ZXIgTXVzaWMgV29ya291dA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/66/de/14/66de1444-0a5c-2256-a2e4-fbcf5eafc63e/mzaf_13842184877428266344.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-14",
    "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
    "artistName": "MlBhYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-15",
    "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
    "artistName": "RWFnbGVz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-16",
    "songTitle": "U3BhY2UgT2RkaXR5",
    "artistName": "RGF2aWQgQm93aWU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-17",
    "songTitle": "U3BhY2UgQ293Ym95",
    "artistName": "SmFtaXJvcXVhaQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-18",
    "songTitle": "UHVycGxlIFJhaW4=",
    "artistName": "UHJpbmNl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-19",
    "songTitle": "UHVycGxlIEhhemU=",
    "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-20",
    "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
    "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-21",
    "songTitle": "RGFuY2luZyBRdWVlbg==",
    "artistName": "QUJCQQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-22",
    "songTitle": "QmxhY2sgRG9n",
    "artistName": "TGVkIFplcHBlbGlu",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/d9/4d/05d94da2-11d8-dbc0-0080-877ff3a6727d/mzaf_3202083383964343705.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-23",
    "songTitle": "UGFpbnQgSXQsIEJsYWNr",
    "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/f5/ec/daf5ece2-6853-c6a4-d481-389001453f75/mzaf_3869995397273029315.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-24",
    "songTitle": "V2lsZCBIdXJzZXM=",
    "artistName": "VGhlIFJvbGxpbmcgU3RvbmVz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/06/65/2a06657a-75cf-2487-e1b6-e4b42f4bfee9/mzaf_3872235870977535530.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-25",
    "songTitle": "V2lsZCBXb3JsZA==",
    "artistName": "Q2F0IFN0ZXZlbnM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/50/5b/13505b10-e557-eba3-b551-3c8303cb1263/mzaf_16436022031668104756.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-26",
    "songTitle": "U3Rhcm1hbiAoMjAxMiBSZW1hc3Rlcik=",
    "artistName": "RGF2aWQgQm93aWU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/5d/be/785dbe59-1fe3-cf29-0292-50e9ee944354/mzaf_5639770502612710333.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-27",
    "songTitle": "QWxsIFN0YXI=",
    "artistName": "U21hc2ggTW91dGg=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-28",
    "songTitle": "V2UgRm91bmQgTG92ZSAoZmVhdC4gQ2FsdmluIEhhcnJpcyk=",
    "artistName": "UmloYW5uYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/81/4e/9f/814e9f54-e7f8-3ab1-d92e-c7869efbd376/mzaf_9149255715038044431.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-29",
    "songTitle": "Um9ja2V0IE1hbg==",
    "artistName": "RWx0b24gSm9obg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/09/33/33/09333333-3333-3333-3333-333333333333/mzaf_1354444444444444444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-30",
    "songTitle": "VGFrZSBNZSBIb21lLCBDb3VudHJ5IFJvYWRz",
    "artistName": "Sm9obiBEZW52ZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ed/e9/47/ede9473f-3334-29c4-21f5-dcd3aa3c029e/mzaf_8295710681386150675.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-05-31",
    "songTitle": "R28gWW91ciBPd24gV2F5",
    "artistName": "RmxlZXR3b29kIE1hYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/81/1b/0e/811b0e3a-2693-9934-9994-999499949994/mzaf_1354444444444444444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-01",
    "songTitle": "RHJlYW1z",
    "artistName": "RmxlZXR3b29kIE1hYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7e/8e/8e/7e8e8e8e-8e8e-8e8e-8e8e-8e8e8e8e8e8e/mzaf_1354444444444444444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-02",
    "songTitle": "U3dlZXQgQ2Fyb2xpbmU=",
    "artistName": "TmVpbCBEaWFtb25k",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0c/66/66/0c666666-6666-6666-6666-666666666666/mzaf_1354444444444444444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-03",
    "songTitle": "Q2FsaWZvcm5pYSBMb3Zl",
    "artistName": "MlBhYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-04",
    "songTitle": "SG90ZWwgQ2FsaWZvcm5pYQ==",
    "artistName": "RWFnbGVz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/1b/f0/a71bf07d-f498-05c9-2c8a-d12af7d019d8/mzaf_11402952498213508559.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-05",
    "songTitle": "U3BhY2UgT2RkaXR5",
    "artistName": "RGF2aWQgQm93aWU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c3/54/2d/c3542d12-0852-cfa9-bfbb-721cc3d129c8/mzaf_1775834641806730037.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-06",
    "songTitle": "U3BhY2UgQ293Ym95",
    "artistName": "SmFtaXJvcXVhaQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/3b/57/403b57f6-027a-6e02-c9bc-da66c03db680/mzaf_10485171400557404261.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-07",
    "songTitle": "UHVycGxlIFJhaW4=",
    "artistName": "UHJpbmNl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/70/9b/4a709b41-3c29-626a-ca69-44aa907f4705/mzaf_14388295257133509788.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-08",
    "songTitle": "UHVycGxlIEhhemU=",
    "artistName": "VGhlIEppbWkgSGVuZHJpeCBFeHBlcmllbmNl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ba/6a/bfba6aa6-40a8-f2f8-8246-2e51041fb0cf/mzaf_10404999512672940742.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-09",
    "songTitle": "RGFuY2luZyBJbiB0aGUgRGFyaw==",
    "artistName": "QnJ1Y2UgU3ByaW5nc3RlZW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/a8/0a/3ca80ac1-92fe-8d9f-e97c-469bdb4f19f9/mzaf_2843471731886662529.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-10",
    "songTitle": "RGFuY2luZyBRdWVlbg==",
    "artistName": "QUJCQQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/47/93/1a4793fc-1586-87bc-00d2-dc4916a61c7c/mzaf_13920610926910283055.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-11",
    "songTitle": "TG92ZQ==",
    "artistName": "S2V5c2hpYSBDb2xl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/55/0e/76/550e7623-1867-f685-0b5a-d6efd483752c/mzaf_18113724796346152750.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-12",
    "songTitle": "TE9WRS4gKGZlYXQuIFphY2FyaSk=",
    "artistName": "S2VuZHJpY2sgTGFtYXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/72/71/89/72718957-3475-8f6f-3685-aedd470ddc20/mzaf_4044691450436775386.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-13",
    "songTitle": "TG92ZQ==",
    "artistName": "TXVzaXEgU291bGNoaWxk",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/14/f0/a3/14f0a36d-9b6f-8756-b13d-d5eb2aba2fdf/mzaf_5505089568190602927.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-14",
    "songTitle": "TG92ZSAoZmVhdC4gUGFya2VyIE1jQ29sbHVtKQ==",
    "artistName": "S29lIFdldHplbA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/97/7e/78/977e7858-0db9-9b93-5203-2ee3d5f797bd/mzaf_11411866255247862945.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-15",
    "songTitle": "TE9WRQ==",
    "artistName": "SmhlbsOpIEFpa28=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fb/2b/5e/fb2b5e68-f068-77f6-514d-c2125af488b9/mzaf_17366238247036802462.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-16",
    "songTitle": "TG92ZQ==",
    "artistName": "TGFuYSBEZWwgUmV5",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1d/71/65/1d71652e-392a-71ec-3ff0-71e2663b92e6/mzaf_18084598624687350460.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-17",
    "songTitle": "bG92ZS4=",
    "artistName": "d2F2ZSB0byBlYXJ0aA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/43/5c/d5/435cd5a8-5edd-7116-6d1c-7ac2d2184635/mzaf_13298608756858273933.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-18",
    "songTitle": "TG92ZQ==",
    "artistName": "RGVzdGlueSdzIENoaWxk",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/41/cf/3c41cf01-5a2d-a2ef-d318-271b265078c9/mzaf_10450045921542816739.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-19",
    "songTitle": "TE9WRS4gKEZFQVQuIFpBQ0FSSS4p",
    "artistName": "S2VuZHJpY2sgTGFtYXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0a/b5/3f/0ab53fc7-32a3-d0fe-bfb0-d3dc298807db/mzaf_7606855658621423387.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-20",
    "songTitle": "TG92ZS4uLiAoSGVyIEZhdWx0KSBbZmVhdC4gQnJ5c29uIFRpbGxlcl0=",
    "artistName": "V2FsZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/aa/62/23/aa622349-ba8e-4759-f9ca-e574ca2d86ad/mzaf_561560130092266288.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-21",
    "songTitle": "TG92ZQ==",
    "artistName": "SW1hZ2luZSBEcmFnb25z",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/64/a0/12/64a012c2-449a-af07-f963-cdc41f135257/mzaf_14085435222783907243.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-22",
    "songTitle": "TG92ZQ==",
    "artistName": "R29kJ3MgUHJvcGVydHkgJiBLaXJrIEZyYW5rbGlu",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9c/e9/d5/9ce9d5e7-ba07-9045-5a26-b49e5b7ba541/mzaf_10775614256788346901.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-23",
    "songTitle": "TG92ZQ==",
    "artistName": "TmFuY3kgQWRhbXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/77/23/cd/7723cde3-e1ce-cc2e-da2c-31f43d9ce9bd/mzaf_2986081853566225584.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-24",
    "songTitle": "TG92ZQ==",
    "artistName": "UmVtYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/67/84/d9/6784d9d6-ab76-b98e-4f38-1270bea44f6e/mzaf_18305025342363658808.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-25",
    "songTitle": "TG92ZQ==",
    "artistName": "QXRsYXMgT2NlYW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/54/ab/36/54ab36ec-00a1-289f-bca6-5a3281330f04/mzaf_9417346572065435614.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-26",
    "songTitle": "TG92ZQ==",
    "artistName": "RGF1Z2h0ZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f9/bb/ba/f9bbba02-d200-f8e9-f0d3-4f6633983ca4/mzaf_11775605686800011731.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-27",
    "songTitle": "TG92ZSAoZmVhdC4gTGlsIFV6aSBWZXJ0KQ==",
    "artistName": "RmVsaXggU25vdw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/a9/64/49/a964494b-64b4-d72c-6951-7f2149e39d7c/mzaf_8125861256770775279.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-28",
    "songTitle": "TG92ZQ==",
    "artistName": "SmFuYSBLcmFtZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1e/ce/a7/1ecea7b7-0834-6e39-6620-94bdb135eccb/mzaf_14812900942859845834.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-29",
    "songTitle": "TE9WRQ==",
    "artistName": "R2lhbmx1Y2EgVmFjY2hpICYgU2ViYXN0acOhbiBZYXRyYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e6/a9/c8/e6a9c8de-5df7-ceee-7507-2d6f1073495d/mzaf_15309586819017287532.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-06-30",
    "songTitle": "TG92ZQ==",
    "artistName": "V2UgQXJlIE1lc3NlbmdlcnM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/da/08/41/da0841a8-edbc-5617-6e83-db382194374f/mzaf_8477304347975990818.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-01",
    "songTitle": "TG92ZQ==",
    "artistName": "S2VubnkgTG9nZ2lucw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/16/20/4b/16204b5b-88b3-c685-600b-c1d4d9097048/mzaf_4050586637626627188.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-02",
    "songTitle": "TG92ZQ==",
    "artistName": "RmluZGluZyBIb3Bl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/b6/7a/9b/b67a9b41-5325-9fcc-f779-8ff50f214e27/mzaf_4789951306547325983.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-03",
    "songTitle": "TG92ZQ==",
    "artistName": "Sm9yZGFuIENocmlzdG9mZg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/14/6c/40146c98-53e7-2357-a526-9831c86373cf/mzaf_14884339287670634.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-04",
    "songTitle": "TG92ZSAoU3dlZXQgTG92ZSk=",
    "artistName": "TGl0dGxlIE1peA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/83/48/21/8348210b-2d83-3ef6-695c-fe41a8f7dba7/mzaf_16374208356055811720.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-05",
    "songTitle": "TE9WRQ==",
    "artistName": "WCBMb3ZlcnM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d3/43/62/d34362bd-9450-2ac2-dda5-67da0b3b74a4/mzaf_7671799548005916847.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-06",
    "songTitle": "TG92ZSAoUmVtYXN0ZXJlZCAyMDEyKQ==",
    "artistName": "VGhlIFNtYXNoaW5nIFB1bXBraW5z",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e0/25/19/e02519a6-2faf-9197-9217-7adcc941ffe3/mzaf_11983204399005103554.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-07",
    "songTitle": "TG92ZSAoTGl2ZSk=",
    "artistName": "S2V5c2hpYSBDb2xl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ec/d1/09/ecd109e8-cc26-ac59-fe4a-83bbc5754b54/mzaf_14316012961471210197.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-08",
    "songTitle": "TG92ZQ==",
    "artistName": "TU9OU1RBIFg=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/eb/aa/22/ebaa2233-e43b-5bcb-1484-8dc259e50c38/mzaf_4381543793783965075.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-09",
    "songTitle": "TG92ZSAoZmVhdC4gQ2hhcmx5IEJsYWNrKQ==",
    "artistName": "TWFsdW1h",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/64/13/b8/6413b842-73f9-229c-4bce-aee23ef63028/mzaf_12004633796441640132.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-10",
    "songTitle": "QmFkIGF0IExvdmU=",
    "artistName": "SGFsc2V5",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3e/d8/06/3ed8065d-1a50-625b-b995-3e653b32701f/mzaf_6014038911874968955.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-11",
    "songTitle": "TG92ZQ==",
    "artistName": "Wk9F",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c7/77/43/c77743e1-50da-473b-b95c-b4ca85b22159/mzaf_257398343383793045.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-12",
    "songTitle": "TE9WRS4gKEZFQVQuIFpBQ0FSSSkgW01peGVkXQ==",
    "artistName": "S2VuZHJpY2sgTGFtYXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/87/bd/6f/87bd6f0b-1040-cfb9-ea21-4fe4a8410358/mzaf_5404689163478781558.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-13",
    "songTitle": "TE9WRQ==",
    "artistName": "U29maWFuZSBQYW1hcnQ=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a7/61/e6/a761e666-6b62-9e8d-9127-09f1018da954/mzaf_10476255185053719130.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-14",
    "songTitle": "TG92ZQ==",
    "artistName": "TXVzaXE=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/50/84/5b/50845b33-390d-ab2d-ebdc-267c497a2ffc/mzaf_4367130383190544196.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-15",
    "songTitle": "TE9WRT8gKGZlYXQuIEdSQVkp",
    "artistName": "RUxPICYgUEVOT01FQ08=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/37/29/a6/3729a6a7-0b34-f718-d654-74203582d056/mzaf_16183631115707561638.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-16",
    "songTitle": "VGltZQ==",
    "artistName": "UGluayBGbG95ZA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8e/b8/69/8eb869c0-a392-95ce-5c93-5e37c59d2d41/mzaf_2460489275691867035.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-17",
    "songTitle": "VGltZQ==",
    "artistName": "SGFucyBaaW1tZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/94/9c/89/949c8995-41f8-d3c1-90eb-81c10b54133b/mzaf_8252792899119007978.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-18",
    "songTitle": "VGltZQ==",
    "artistName": "TkY=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b7/71/69/b77169f4-4431-d70a-5ead-eb931def6b3b/mzaf_17372905056525007884.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-19",
    "songTitle": "VGltZQ==",
    "artistName": "SG9vdGllICYgVGhlIEJsb3dmaXNo",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fa/eb/45/faeb45cd-0ae1-3151-14a3-416e233fcbee/mzaf_1940862598594412843.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-20",
    "songTitle": "VGltZQ==",
    "artistName": "T2xpdmlhIERlYW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/61/18/b4/6118b46b-c922-3818-4273-fcfb6c5d70e4/mzaf_7029475382389682376.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-21",
    "songTitle": "VGltZSAoQ2xvY2sgb2YgdGhlIEhlYXJ0KQ==",
    "artistName": "Q3VsdHVyZSBDbHVi",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4b/68/29/4b682910-4468-b0c0-a27a-6d98c2da7c28/mzaf_8039350978143331882.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-22",
    "songTitle": "VGltZQ==",
    "artistName": "U25vaCBBYWxlZ3Jh",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/13/0e/a8/130ea89e-e665-3292-a2b7-0bd5ab314362/mzaf_8833156474941931738.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-23",
    "songTitle": "VGltZSAoSXMp",
    "artistName": "U29sYW5nZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fe/47/b0/fe47b056-b21e-8385-695e-aa6a5df09b64/mzaf_7433335367030995380.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-24",
    "songTitle": "VGltZSAoRWRpdCk=",
    "artistName": "UGluayBGbG95ZA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ad/d3/32/add33205-f271-b769-0027-612e5e0f2100/mzaf_14570436363494513081.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-25",
    "songTitle": "VGltZSAoRWRpdCk=",
    "artistName": "TkY=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/02/22/75/022275e5-d7fe-7c1b-d94c-6e0aedd66bfe/mzaf_18266520238785280611.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-26",
    "songTitle": "VGltZQ==",
    "artistName": "UG5CIFJvY2s=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/81/cb/53/81cb5348-e2ce-4a33-3fb2-506620c3739e/mzaf_4641043100298976278.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-27",
    "songTitle": "VGltZSAoWW91IGFuZCBJKQ==",
    "artistName": "S2hydWFuZ2Jpbg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/dc/42/8b/dc428b5d-1c16-d0b7-2759-af2e1875601e/mzaf_18419284734544287570.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-28",
    "songTitle": "VElNRQ==",
    "artistName": "QWxlc3Nv",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/07/d2/46/07d2468e-4422-6413-e9ed-43d46ca93e61/mzaf_100908014345525443.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-29",
    "songTitle": "VGltZSAoRnJvbSAiU3RhciIgU2Vhc29uIDIp",
    "artistName": "U3RhciBDYXN0",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/36/16/dc/3616dc01-1c6b-0c04-8134-42007ccf2e09/mzaf_805925952224875291.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-30",
    "songTitle": "VGltZQ==",
    "artistName": "QmFja3N0cmVldCBCb3lz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/51/61/d5/5161d5fc-5233-2fba-bb08-8106ea40f4d9/mzaf_6960358828236314154.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-07-31",
    "songTitle": "VGltZQ==",
    "artistName": "SnVuZ2xl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/85/e4/d3/85e4d392-9ebe-b037-dadd-ef00ad27334c/mzaf_17059843927918395817.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-01",
    "songTitle": "VGltZQ==",
    "artistName": "QW5nZWxvIERlIEF1Z3VzdGluZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ca/ba/51/caba510c-2a29-9299-efc2-c640e24030e8/mzaf_6223046006430427497.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-02",
    "songTitle": "VGltZSAoZmVhdC4gUm9kZHkgUmljY2gp",
    "artistName": "RmFib2xvdXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/86/bf/9b/86bf9bfb-2a9a-1957-28a9-f5183ddcbe9f/mzaf_13053416301830201947.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-03",
    "songTitle": "VGltZQ==",
    "artistName": "Sy4gTWljaGVsbGU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/b5/4e/87/b54e87e4-cb32-4afa-f408-99ad8835c4de/mzaf_16226940760731049273.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-04",
    "songTitle": "VGltZSAoZmVhdC4gTWVlayBNaWxsKQ==",
    "artistName": "TGlsIEJhYnk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/95/c5/65/95c56514-e2a5-5ba3-b0c4-1e2e91ac302b/mzaf_6896480823152001331.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-05",
    "songTitle": "VGltZQ==",
    "artistName": "TXVzaXEgU291bGNoaWxk",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f6/3b/e3/f63be33c-4dfd-03da-3b9a-0aec5a1b99e6/mzaf_11703187758907371757.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-06",
    "songTitle": "VGltZQ==",
    "artistName": "TmUtWW8=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/37/8d/9f/378d9faf-142c-c952-6927-d87f84369d84/mzaf_8577165987730939464.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-07",
    "songTitle": "VGltZSAoTWVkaXRhdGlvbik=",
    "artistName": "c3RhcnJ5",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fe/59/59/fe5959dd-6cd7-98b5-b263-33e455f03574/mzaf_10049489389770014213.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-08",
    "songTitle": "VGltZSAoZmVhdC4gT2xhbWlkZSk=",
    "artistName": "THl0YQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/20/73/79/207379ba-a4d7-3019-d7dd-4269d52feea7/mzaf_8494098848974406240.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-09",
    "songTitle": "VGltZQ==",
    "artistName": "TWlra3kgRWtrbw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/89/a2/23/89a2238c-87e4-d74a-654a-ec4b33e97664/mzaf_8323092017818165165.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-10",
    "songTitle": "Q3JhenkgaW4gTG92ZSAoZmVhdC4gSkHFuC1aKQ==",
    "artistName": "QmV5b25jw6k=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b5/2a/4f/b52a4fcd-0628-cb38-c8ab-a697c11a9175/mzaf_1541321636664021445.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-11",
    "songTitle": "Q29tcGxpY2F0ZWQ=",
    "artistName": "QXZyaWwgTGF2aWduZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d5/82/55/d58255cd-4bd1-c339-1584-591e9d1305ee/mzaf_14546367220838781682.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-12",
    "songTitle": "UG9rZXIgRmFjZQ==",
    "artistName": "TGFkeSBHYWdh",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7b/d4/b9/7bd4b972-99ea-4ce7-9042-615a894173a4/mzaf_17216069970734143078.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-13",
    "songTitle": "TXMuIEphY2tzb24gKFJhZGlvIE1peCk=",
    "artistName": "T3V0a2FzdA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/73/dd/36/73dd36ec-eaaa-83cd-1a7b-71de28541ced/mzaf_16514838695000151630.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-14",
    "songTitle": "V2F0ZXJmYWxscw==",
    "artistName": "VExD",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e9/81/4e/e9814ecd-7282-e0cf-6a19-70ea78117382/mzaf_10928185948311762507.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-15",
    "songTitle": "R2luIGFuZCBKdWljZQ==",
    "artistName": "U25vb3AgRG9nZw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/65/a7/9d/65a79dff-19d0-302d-87dc-989e14a484e1/mzaf_4549683202494535027.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-16",
    "songTitle": "TnV0aGluJyBCdXQgYSAnRycgVGhhbmc=",
    "artistName": "TWl4bWFzdGVyIFRocm93YmFjaw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/04/2d/35/042d3572-31a3-fda6-c5ed-e63fdc9beb9b/mzaf_4915346364814681151.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-17",
    "songTitle": "SG90IGluIEhlcnJl",
    "artistName": "TmVsbHk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1b/ce/48/1bce48bf-49c2-eca0-7ca5-2cd614e12e2d/mzaf_7912378696661820444.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-18",
    "songTitle": "U3RhbmQgVXAgKGZlYXQuIFNoYXdubmEp",
    "artistName": "THVkYWNyaXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ac/c0/45/acc0453c-48de-5f03-687d-d5c88053b4d3/mzaf_13976664708035182948.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-19",
    "songTitle": "Qm9vdHlsaWNpb3Vz",
    "artistName": "RGVzdGlueSdzIENoaWxk",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/14/58/8f/14588f61-03dd-b5fc-480b-7399b23dd41a/mzaf_4557500128647484639.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-20",
    "songTitle": "VGhlbWUgZnJvbSBKdXJhc3NpYyBQYXJr",
    "artistName": "Sm9obiBXaWxsaWFtcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f1/df/86/f1df8697-0cd1-2b2e-4156-774c42d52f02/mzaf_6088124320270724230.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-21",
    "songTitle": "VGhlIEZ1dHVyZQ==",
    "artistName": "QWxhbiBTaWx2ZXN0cmk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d1/37/fb/d137fbe1-522d-6083-8f46-73e052e26c2d/mzaf_2401323217345167462.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-22",
    "songTitle": "TXkgSGVhcnQgV2lsbCBHbyBPbiAoTG92ZSBUaGVtZSBmcm9tICJUaXRhbmljIik=",
    "artistName": "Q8OpbGluZSBEaW9u",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ad/10/9c/ad109c62-aa02-8345-bfcc-b50f98345475/mzaf_3279697888712975539.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-23",
    "songTitle": "TGV0IEl0IEdv",
    "artistName": "SWRpbmEgTWVuemVs",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/43/5f/36/435f3609-ddd5-bc10-3dbb-ddf5872b93ce/mzaf_9461789858996596537.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-24",
    "songTitle": "TG9zZSBZb3Vyc2VsZg==",
    "artistName": "RW1pbmVt",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/62/0a/a5/620aa56f-189e-708a-80f0-cebdada3872e/mzaf_7131619873177773332.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-25",
    "songTitle": "RHJhZ29uYm9ybg==",
    "artistName": "SmVyZW15IFNvdWxl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e1/f6/74/e1f6743e-3def-9555-70c6-669174974dc8/mzaf_15684803984770121721.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-26",
    "songTitle": "T25lLVdpbmdlZCBBbmdlbA==",
    "artistName": "Tm9idW8gVWVtYXRzdSAmIFNlaWppIEhvbmRh",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/Music/v4/72/f4/67/72f46783-113a-4bf7-092e-2c0e96b371c1/mzaf_4808677183270780693.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-27",
    "songTitle": "UG9rw6ltb24gVGhlbWUgKGZlYXQuIEphc29uIFBhaWdlKQ==",
    "artistName": "Sm9uYXRoYW4gWW91bmc=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/84/52/c1/8452c1cb-f507-e9fc-ff4d-08fbe16cf568/mzaf_930996474611003179.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-28",
    "songTitle": "RGlydG1vdXRo",
    "artistName": "Q2hyaXN0b3BoZXIgTGFya2lu",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8d/b7/71/8db7715d-045e-2954-d557-eceb192b8446/mzaf_8081838082433737831.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-29",
    "songTitle": "Q3JlZXAgKEFjb3VzdGljKQ==",
    "artistName": "UmFkaW9oZWFk",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8d/e0/bb/8de0bb10-0593-83cc-4d2c-4e9f6ea9b575/mzaf_16440589638018943894.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-30",
    "songTitle": "Q2FsaWZvcm5pY2F0aW9u",
    "artistName": "UmVkIEhvdCBDaGlsaSBQZXBwZXJz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/30/57/a2/3057a2dc-cbd7-bea7-66fd-7680c0a47c68/mzaf_7704768448750272219.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-08-31",
    "songTitle": "RXZlcmxvbmc=",
    "artistName": "Rm9vIEZpZ2h0ZXJz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d0/77/17/d07717cb-9977-1cbb-6634-3e598d0c4da6/mzaf_15769952961470333318.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-01",
    "songTitle": "SW4gdGhlIEVuZA==",
    "artistName": "TElOS0lOIFBBUks=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3f/cb/c7/3fcbc7cc-0606-7f6e-7fc3-793318cfd1ed/mzaf_16081918663584534594.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-02",
    "songTitle": "RmFsbGluJw==",
    "artistName": "QWxpY2lhIEtleXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9a/12/79/9a1279b9-57a5-2ae9-bb32-5029a2d116f7/mzaf_7701118438917111127.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-03",
    "songTitle": "TGl2aW4nIGxhIFZpZGEgTG9jYQ==",
    "artistName": "Umlja3kgTWFydGlu",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/08/a7/cb/08a7cb6d-0618-3c01-6b80-2b92aaca7406/mzaf_15654413058067067771.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-04",
    "songTitle": "SGVybw==",
    "artistName": "RW5yaXF1ZSBJZ2xlc2lhcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/09/00/fb/0900fb97-abee-cab0-3e5c-090fa249c728/mzaf_5083591559950721784.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-05",
    "songTitle": "TWFtYm8gTm8uIDUgKGEgTGl0dGxlIEJpdCBvZi4uLik=",
    "artistName": "TG91IEJlZ2E=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/95/12/14/951214ff-a3f2-7b9c-094c-385b382b5a14/mzaf_6010878480642586774.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-06",
    "songTitle": "VmFtcGlyZSBLaWxsZXI=",
    "artistName": "Q2FzdGxldmFuaWEgU291bmQgVGVhbQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/82/af/11/82af1154-d5b1-e36a-27f9-8146140ca74c/mzaf_16369326820781430498.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-07",
    "songTitle": "QWxsIFN0YXI=",
    "artistName": "U21hc2ggTW91dGg=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/03/ef/b003ef4c-1a22-6b15-e851-fb106ad96a3b/mzaf_3320656447657988367.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-08",
    "songTitle": "U3RhY3kncyBNb20=",
    "artistName": "Rm91bnRhaW5zIE9mIFdheW5l",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/41/92/1f/41921f95-dfb3-8057-3944-b7022b716ebe/mzaf_887188329895614171.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-09",
    "songTitle": "RHJvcCBJdCBMaWtlIEl0J3MgSG90IChmZWF0LiBQaGFycmVsbCBXaWxsaWFtcyk=",
    "artistName": "U25vb3AgRG9nZw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/58/53/c1/5853c174-820d-96dc-0cc4-7319efef43b2/mzaf_11149216817889125218.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-10",
    "songTitle": "RGlsZW1tYSAoZmVhdC4gS2VsbHkgUm93bGFuZCkgW01peGVkXQ==",
    "artistName": "TmVsbHk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/40/6b/89/406b89a0-b3e3-355f-9351-0edaf43907cd/mzaf_9271823812143526653.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-11",
    "songTitle": "Tm8gU2NydWJz",
    "artistName": "VExD",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/64/38/c964385e-f18a-fd99-638c-76d4f9bdd4e2/mzaf_4744709234124158764.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-12",
    "songTitle": "TG9uZG9uIEJyaWRnZQ==",
    "artistName": "RmVyZ2ll",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8d/7f/b5/8d7fb595-079c-f2c1-731c-0acb86ae4e76/mzaf_16982051146476540803.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-13",
    "songTitle": "VGhlIExlZ2VuZCBvZiBaZWxkYSAtIE1haW4gVGhlbWU=",
    "artistName": "R2VlayBNdXNpYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b5/c7/90/b5c79033-7a4c-c363-18e1-aa5b36aadbd7/mzaf_7827688709502907178.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-14",
    "songTitle": "RG9ua2V5IEtvbmcgQ291bnRyeSBUaGVtZQ==",
    "artistName": "VmlkZW8gR2FtZSBQbGF5ZXJz",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ea/2d/0e/ea2d0e33-dd89-00db-ce85-8182f99a182d/mzaf_1250266186559624455.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-15",
    "songTitle": "VGltZQ==",
    "artistName": "SGFucyBaaW1tZXI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/94/9c/89/949c8995-41f8-d3c1-90eb-81c10b54133b/mzaf_8252792899119007978.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-16",
    "songTitle": "TWVnYWxvdmFuaWE=",
    "artistName": "VG9ieSBGb3g=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/25/ed/8b/25ed8b44-fcbf-e901-4080-2b038334e6fc/mzaf_3554902685686560817.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-17",
    "songTitle": "VGhlbWUgKEZyb20gIkp1cmFzc2ljIFBhcmsiKQ==",
    "artistName": "Sm9obiBXaWxsaWFtcyAmIEJvc3RvbiBQb3BzIE9yY2hlc3RyYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ee/ff/d4/eeffd46e-743a-607b-c70b-d480737d3aa8/mzaf_8194458698008758144.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-18",
    "songTitle": "VGhlIFNoaXJl",
    "artistName": "SG93YXJkIFNob3Jl",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/21/10/a9/2110a9d3-ea40-615a-944a-ab846d856d95/mzaf_8033351372720690653.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-19",
    "songTitle": "TWFpbiBUaXRsZSBUZXJtaW5hdG9yIDIgVGhlbWUgKFJlbWFzdGVyZWQgMjAxNyk=",
    "artistName": "QnJhZCBGaWVkZWw=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/08/5c/24/085c240c-080d-8bb1-afde-c6f89de77620/mzaf_2292569570345746832.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-20",
    "songTitle": "Q2lyY2xlIG9mIExpZmU=",
    "artistName": "Q2FybWVuIFR3aWxsaWUgJiBMZWJvIE0=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d2/29/55/d229559e-5fc7-7cb0-2567-847ec15feabc/mzaf_2397341119625965340.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-21",
    "songTitle": "R2VuaWUgaW4gYSBCb3R0bGU=",
    "artistName": "Q2hyaXN0aW5hIEFndWlsZXJh",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e9/63/7c/e9637c84-3cbe-ad95-a5be-b6962ed54e08/mzaf_11300153256112368673.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-22",
    "songTitle": "VG94aWM=",
    "artistName": "QnJpdG5leSBTcGVhcnM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ae/c4/7f/aec47f56-842d-49b4-558b-7a7523fd6728/mzaf_6693111381462300599.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-23",
    "songTitle": "SXQncyBHb25uYSBCZSBNZQ==",
    "artistName": "Kk5TWU5D",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/45/ce/c3/45cec315-753e-38c4-9413-4caaa8cb3516/mzaf_3751673309724355352.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-24",
    "songTitle": "V2FpdGluZyBmb3IgVG9uaWdodA==",
    "artistName": "SmVubmlmZXIgTG9wZXo=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/73/f1/59/73f1599f-b20e-4bda-9d24-167a55edb9b1/mzaf_16279959302221601258.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-25",
    "songTitle": "Vm9ndWU=",
    "artistName": "TWFkb25uYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f5/4d/26/f54d265c-1d43-6d64-7798-d1b8e6db2fda/mzaf_10996471418538527772.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-26",
    "songTitle": "QmFpbGFtb3M=",
    "artistName": "RW5yaXF1ZSBJZ2xlc2lhcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d8/f7/5c/d8f75c76-db96-c3dd-3649-9b703b12327a/mzaf_13598217233416329117.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-27",
    "songTitle": "V2hlbmV2ZXIsIFdoZXJldmVy",
    "artistName": "U2hha2lyYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/03/db/c9/03dbc935-12c2-4922-51ff-76170883753a/mzaf_13989672290091509449.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-28",
    "songTitle": "SSBXYW5uYSBTZXggWW91IFVw",
    "artistName": "Q29sb3IgTWUgQmFkZA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/02/b4/ab/02b4ab75-d159-0b33-d38a-1d26e0f92a16/mzaf_14316997019433841898.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-29",
    "songTitle": "TW90b3ducGhpbGx5",
    "artistName": "Qm95eiBJSSBNZW4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ab/20/d5/ab20d573-b59a-b692-adbf-8aa35d14f423/mzaf_10887392246184244696.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-09-30",
    "songTitle": "U2hvb3AgKFJlLVJlY29yZGVkKSBbUmVtYXN0ZXJlZF0=",
    "artistName": "U2FsdC1OLVBlcGE=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4f/c4/58/4fc458e9-afa2-4e61-17e9-7641bdc00e5d/mzaf_13036104497700832841.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-01",
    "songTitle": "TG9uZWx5",
    "artistName": "QWtvbg==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/54/0d/86540d69-0859-a791-5257-6a2784f81095/mzaf_1649354300942287070.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-02",
    "songTitle": "R2FuZ3N0YSdzIFBhcmFkaXNlIChmZWF0LiBMLlYuKSBbMjAyMyBSZW1hc3Rlcl0=",
    "artistName": "Q29vbGlv",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/56/58/f7/5658f7ec-2bb5-0ef0-0f9f-5adcd1a96363/mzaf_7433975646947882823.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-03",
    "songTitle": "Q2FsaWZvcm5pYSBMb3ZlIChmZWF0LiBEci4gRHJlICYgUm9nZXIgVHJvdXRtYW4pIFtSZW1peF0=",
    "artistName": "MlBhYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b0/64/82/b06482ec-330d-a785-8ae1-523b4164bac8/mzaf_2268361969300808726.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-04",
    "songTitle": "U3RpbGwgRC5SLkUuIChJbnN0cnVtZW50YWwp",
    "artistName": "RHIuIERyZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/cb/72/35/cb723539-f539-37d7-4316-9c2833142e3c/mzaf_17011503900190096840.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-05",
    "songTitle": "SHlwbm90aXplIChDbHViIE1peCk=",
    "artistName": "VGhlIE5vdG9yaW91cyBCLkkuRy4=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3d/8b/7f/3d8b7fc2-2cc1-9efd-4cdd-698d46c628a3/mzaf_17623046042307575656.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-06",
    "songTitle": "R2V0dGluJyBKaWdneSBXaXQgSXQ=",
    "artistName": "V2lsbCBTbWl0aA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4e/b5/7f/4eb57fde-16b2-e64e-cdb3-1362d2ff8c98/mzaf_17690539797995316515.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-07",
    "songTitle": "RnJlZWstQS1MZWVrIChSZW1peCk=",
    "artistName": "UGV0ZXkgUGFibG8=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/31/26/a7/3126a75e-5d70-8f5c-685a-49dbfd5dc8dc/mzaf_10310392067936638165.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-08",
    "songTitle": "QmFydGVuZGVy",
    "artistName": "TGFkeSBB",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2d/3c/76/2d3c76d8-7ba1-a48e-4378-fed3e17d644e/mzaf_1588848192753232049.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-09",
    "songTitle": "QmVoaW5kIEJsdWUgRXllcw==",
    "artistName": "TGltcCBCaXpraXQ=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4d/27/b8/4d27b8b4-9503-959f-d44b-d00abd8574dc/mzaf_3533202050614562149.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-10",
    "songTitle": "Q2hhbmdlIChJbiB0aGUgSG91c2Ugb2YgRmxpZXMp",
    "artistName": "RGVmdG9uZXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/58/3d/ca/583dcad3-e2ca-e229-f089-637b0ab7d328/mzaf_14300378853874282579.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-11",
    "songTitle": "TGlrZSBhIFN0b25l",
    "artistName": "QXVkaW9zbGF2ZQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/45/c5/a4/45c5a454-85c9-dc43-6d42-b86ff48964b7/mzaf_792093563240187454.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-12",
    "songTitle": "RG8gSSBXYW5uYSBLbm93Pw==",
    "artistName": "QXJjdGljIE1vbmtleXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/df/c3/9c/dfc39caa-a559-b5ac-5b50-472a1c300ca6/mzaf_14741548917211029550.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-13",
    "songTitle": "SXJpcw==",
    "artistName": "VGhlIEdvbyBHb28gRG9sbHM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d5/c4/72/d5c472a3-2cea-e2fd-a94a-5a9290667075/mzaf_15343141215451287660.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-14",
    "songTitle": "TXIuIEpvbmVz",
    "artistName": "Q291bnRpbmcgQ3Jvd3M=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f3/b0/2a/f3b02a56-a5bf-e940-4370-2e0a609f1cb4/mzaf_16264556580562087321.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-15",
    "songTitle": "Um9sbG91dCAoTXkgQnVzaW5lc3Mp",
    "artistName": "THVkYWNyaXM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a0/dc/10/a0dc10a8-09f7-34ce-424c-05146a4f45db/mzaf_2768791837692658022.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-16",
    "songTitle": "WWVhaCEgKGZlYXQuIExpbCBKb24gJiBMdWRhY3Jpcyk=",
    "artistName": "VVNIRVI=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/94/52/3c/94523c88-f5f9-16f4-dbd7-f284ca168048/mzaf_7184891920196479048.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-17",
    "songTitle": "SGlwcyBEb24ndCBMaWUgKGZlYXQuIFd5Y2xlZiBKZWFuKQ==",
    "artistName": "U2hha2lyYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ac/c7/61/acc7619f-c1e3-e0a5-df9b-0329a35af062/mzaf_13106936727189536738.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-18",
    "songTitle": "VW1icmVsbGEgKGZlYXQuIEpBxbgtWik=",
    "artistName": "UmloYW5uYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7b/45/22/7b452241-882c-409b-3a9b-23306b14286a/mzaf_8588243939716013218.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-19",
    "songTitle": "SGV5IFlhIQ==",
    "artistName": "T3V0a2FzdA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ce/98/c0/ce98c0e5-afa5-f746-032a-fa56ad057762/mzaf_8802440392972724196.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-20",
    "songTitle": "QSBNaWxsaQ==",
    "artistName": "TGlsIFdheW5l",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f7/e7/83/f7e78318-65d9-7b8e-cbeb-f2e5ab80076c/mzaf_2797028050074940036.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-21",
    "songTitle": "TnVtYg==",
    "artistName": "TElOS0lOIFBBUks=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bb/13/76/bb1376a7-4db0-ed68-c1a6-d0278cc4b320/mzaf_17832584344687833283.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-22",
    "songTitle": "WWVsbG93",
    "artistName": "Q29sZHBsYXk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/66/f3/1a/66f31a76-a6ed-cb4c-f353-23310a7ae9a8/mzaf_10593596652344378873.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-23",
    "songTitle": "Q2xvY2tz",
    "artistName": "Q29sZHBsYXk=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d2/9b/17/d29b173f-546a-606b-378f-8f3c333e81f1/mzaf_3952108508633208951.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-24",
    "songTitle": "SmVzdXMgV2Fsa3MgKFJlbWl4KSBbTWl4ZWRd",
    "artistName": "S2FueWUgV2VzdA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/61/af/4d/61af4db4-e4b5-5c29-f8cc-997acfd3900c/mzaf_17464999566118504879.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-25",
    "songTitle": "U21lbGxzIExpa2UgVGVlbiBTcGlyaXQ=",
    "artistName": "TmlydmFuYQ==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a6/53/1e/a6531efa-397c-eb73-ecab-9b2790c1471e/mzaf_16440344883389407474.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-26",
    "songTitle": "QWxsIHRoZSBTbWFsbCBUaGluZ3M=",
    "artistName": "YmxpbmstMTgy",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/98/22/8d/98228d8c-b66b-ef27-c97f-f44c4abb632e/mzaf_1096879951067266311.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-27",
    "songTitle": "TXIuIEJyaWdodHNpZGU=",
    "artistName": "VGhlIEtpbGxlcnM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b3/95/6e/b3956e14-35f0-937e-afb0-72774d3f613f/mzaf_8359343604382181711.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-28",
    "songTitle": "RmVlbCBHb29kIEluYy4gKGZlYXQuIERhdmlkIEpvbGljb2V1ciwgS2VsdmluIE1lcmNlciAmIFZpbmNlbnQgTWFzb24p",
    "artistName": "R29yaWxsYXogJiBEZSBMYSBTb3Vs",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/51/ec/df/51ecdf14-b30c-4e55-8d1b-67073cbc16c4/mzaf_8877212452170183777.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-29",
    "songTitle": "VGhpcyBMb3Zl",
    "artistName": "TWFyb29uIDU=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/79/0b/8d/790b8d2f-dae6-9380-87ec-6acd52806e49/mzaf_4263648516794463383.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-30",
    "songTitle": "TnV0aGlu4oCZIEJ1dCBhICJHIiBUaGFuZw==",
    "artistName": "RHIuIERyZSAmIFNub29wIERvZ2c=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d6/b5/44/d6b5444e-a736-25e0-1ab8-b7b84c06aa97/mzaf_959189292152238851.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-10-31",
    "songTitle": "Q2FsaWZvcm5pYSBMb3ZlIChmZWF0LiBSb2dlciBUcm91dG1hbiAmIERyLiBEcmUp",
    "artistName": "MlBhYw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/1a/f4/cc/1af4cc71-d95a-556a-be44-03e09380697f/mzaf_7789998250395440851.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-11-01",
    "songTitle": "UC5JLk0uUC4=",
    "artistName": "NTAgQ2VudA==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/3a/ff/68/3aff68fb-e3c5-5769-4e91-270cb09121b1/mzaf_8951500647542946140.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-11-02",
    "songTitle": "U2F5IE15IE5hbWU=",
    "artistName": "RGVzdGlueSdzIENoaWxk",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c4/e9/31/c4e9314c-ef3f-3f7c-387c-132589559784/mzaf_8926786703573931171.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-11-03",
    "songTitle": "QWx3YXlzIEJlIE15IEJhYnk=",
    "artistName": "TWFyaWFoIENhcmV5",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/72/ef/1f/72ef1f42-626b-9c29-4187-e5bfa23e8bfe/mzaf_18285435883138168150.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-11-04",
    "songTitle": "U3RhciBXYXJzIChNYWluIFRoZW1lKQ==",
    "artistName": "Sm9obiBXaWxsaWFtcyAmIExvbmRvbiBTeW1waG9ueSBPcmNoZXN0cmE=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/22/70/d3/2270d3e9-b58f-5211-b096-dd32426144c1/mzaf_1330954041442566776.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-11-05",
    "songTitle": "OTkgUHJvYmxlbXM=",
    "artistName": "SkHFuC1a",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b8/7f/c9/b87fc94c-3dd4-57f2-9411-280c122a23fd/mzaf_9978663718032466727.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-11-06",
    "songTitle": "SGVkd2lnJ3MgVGhlbWU=",
    "artistName": "Sm9obiBXaWxsaWFtcw==",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/43/85/18/438518d0-8fd5-1a15-18c0-aad9f814845e/mzaf_11676418529425576487.plus.aac.p.m4a",
    "offset": 0
  },
  {
    "day": "2026-11-07",
    "songTitle": "U3VwZXIgTWFyaW8gQnJvcy4gVGhlbWU=",
    "artistName": "Qm9vZ2llIEhlaWdodHM=",
    "audioUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d3/81/74/d3817403-cd42-3b1e-443e-ad39b1c9ce60/mzaf_4557766351967513696.plus.aac.p.m4a",
    "offset": 0
  }
];

export const songs = rawSongs.map(song => ({
  ...song,
  songTitle: atob(song.songTitle),
  artistName: atob(song.artistName)
}));
