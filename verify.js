const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'verify.png' });
  const content = await page.content();
  console.log("Found Dudle UI:", content.includes('dudle-container'));

  // check uuid
  const uuid = await page.evaluate(() => localStorage.getItem('dudle_uuid'));
  console.log("UUID generated:", !!uuid, uuid);

  await browser.close();
})();
