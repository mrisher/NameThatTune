const { execSync } = require('child_process');
console.log("Starting test script...");
// We will test if the dispatch throws
try {
  const Webamp = require('webamp');
  console.log(Webamp);
} catch (e) {
  console.log("Error loading Webamp", e);
}
