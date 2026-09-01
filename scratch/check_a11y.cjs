const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Go to the local preview server
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });
  
  const results = await new AxePuppeteer(page).analyze();
  
  console.log('--- ACCESSIBILITY VIOLATIONS ---');
  results.violations.forEach(v => {
    console.log(`\nRule: ${v.id} (${v.impact})`);
    console.log(`Description: ${v.description}`);
    console.log(`Nodes: ${v.nodes.length}`);
    v.nodes.forEach(n => console.log(` - ${n.target.join(', ')}: ${n.failureSummary}`));
  });

  await browser.close();
})();
