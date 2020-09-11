const fs = require('fs')

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/day-18/html-to-pdf-example/example/resume3.html', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'invoice2.pdf', format: 'A4'});

  await browser.close();
})();