const { chromium } = require('/opt/data/agents/work/reviewer/.browser-qa/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const root = path.resolve(__dirname, '..');
const pagePath = path.join(root, 'trips/2026-hongkong-zhongshan/index.html');
const pageUrl = `file://${pagePath}`;
const chromePath = '/opt/hermes/tools/chromium-1208/chrome-linux64/chrome';

(async () => {
  const browser = await chromium.launch({ executablePath: chromePath, headless: true });
  const errors = [];
  const desktop = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  desktop.on('console', (message) => { if (message.type() === 'error') errors.push(`console:${message.text()}`); });
  desktop.on('pageerror', (error) => errors.push(`pageerror:${error.message}`));
  await desktop.goto(pageUrl, { waitUntil: 'load' });
  await desktop.screenshot({ path: path.join(__dirname, 'zhongshan-v2-desktop-1280-r2.png'), fullPage: true });


  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  mobile.on('console', (message) => { if (message.type() === 'error') errors.push(`console:${message.text()}`); });
  mobile.on('pageerror', (error) => errors.push(`pageerror:${error.message}`));
  await mobile.goto(pageUrl, { waitUntil: 'load' });
  const initialScroll = await mobile.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth }));
  await mobile.getByRole('tab', { name: '餐飲' }).click();
  const foodActive = await mobile.locator('#panel-food').evaluate((element) => !element.hidden);
  await mobile.getByRole('tab', { name: '餐飲' }).press('End');
  const lastTab = await mobile.evaluate(() => ({ active: document.activeElement.textContent, selected: document.activeElement.getAttribute('aria-selected') }));
  const checkbox = mobile.locator('[data-check="0"]');
  await checkbox.check();
  const storage = await mobile.evaluate(() => localStorage.getItem('zhongshan-check-0'));
  const controlHeight = await mobile.getByRole('tab', { name: '交通' }).evaluate((element) => getComputedStyle(element).minHeight);
  await mobile.screenshot({ path: path.join(__dirname, 'zhongshan-v2-mobile-390-r2.png'), fullPage: true });

  const linkReport = await desktop.evaluate(async () => {
    const links = [...document.querySelectorAll('a[href]')];
    const named = links.filter((link) => link.textContent.trim().length > 0).length;
    const external = links.filter((link) => /^https?:/.test(link.href));
    return { total: links.length, named, external: external.length, externalSecure: external.every((link) => link.target === '_blank' && link.rel.includes('noopener') && link.rel.includes('noreferrer')), images: document.images.length };
  });
  const result = { initialScroll, foodActive, lastTab, storage, controlHeight, linkReport, errors };
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
  if (errors.length || initialScroll.scrollWidth !== initialScroll.clientWidth || !foodActive || lastTab.selected !== 'true' || storage !== '1' || !linkReport.externalSecure || linkReport.images !== 0) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exit(1); });
