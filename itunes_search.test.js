const { fetchItunesUrl } = require('./server');

async function runTests() {
  console.log("--- Starting iTunes Search Tests ---");
  let failed = false;
  const tests = [
    { artist: 'Sara Bareilles', title: 'King Of Anything', expectedTitleIncludes: 'King of Anything' },
    { artist: 'Radiohead', title: 'Creep (Acoustic)', expectedTitleIncludes: 'Creep' },
    { artist: 'Journey', title: 'Dont Stop Believin', expectedTitleIncludes: "Don't Stop Believin" },
  ];

  for (const test of tests) {
    const result = await fetchItunesUrl(test.artist, test.title);
    if (result) {
       const passed = result.trackName.toLowerCase().includes(test.expectedTitleIncludes.toLowerCase());
       if (passed) {
         console.log(`✅ Passed: ${test.artist} - ${test.title} -> ${result.trackName}`);
       } else {
         console.log(`❌ Failed: ${test.artist} - ${test.title} (Got: "${result.trackName}", Expected to include: "${test.expectedTitleIncludes}")`);
         failed = true;
       }
    } else {
       console.log(`❌ Failed: ${test.artist} - ${test.title} (No result returned)`);
       failed = true;
    }
  }

  if (failed) {
    console.log("\n❌ SOME TESTS FAILED!");
    process.exit(1);
  } else {
    console.log("\n✅ ALL TESTS PASSED!");
    process.exit(0);
  }
}

runTests().catch(e => {
  console.error(e);
  process.exit(1);
});
