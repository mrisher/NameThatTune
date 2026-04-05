// To add new songs, use btoa("Your String") in your browser console to get the base64 value.
// Example: btoa("Bohemian Rhapsody") -> "Qm9oZW1pYW4gUmhhcHNvZHk="

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
  }
];

export const songs = rawSongs.map(song => ({
  ...song,
  songTitle: atob(song.songTitle),
  artistName: atob(song.artistName)
}));
