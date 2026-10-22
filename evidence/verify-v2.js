const fs = require('fs');
const vm = require('vm');
const source = fs.readFileSync('trips/2026-hongkong-zhongshan/data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);
const data = sandbox.window.ZHONGSHAN_DATA;
const required = ['name', 'status', 'scope', 'confirm', 'sources'];
const bad = data.items.filter((item) => required.some((key) => !item[key]) || !Array.isArray(item.sources) || !item.sources.length || item.sources.some((sourceItem) => !/^https?:\/\//.test(sourceItem[1]) && sourceItem[1] !== '#data-governance'));
const categoryCounts = Object.fromEntries(data.categories.map((category) => [category.id, data.items.filter((item) => item.category === category.id).length]));
const html = fs.readFileSync('trips/2026-hongkong-zhongshan/index.html', 'utf8');
const app = fs.readFileSync('trips/2026-hongkong-zhongshan/app.js', 'utf8');
const presentation = [html.match(/<title>(.*?)<\/title>/s)?.[1], html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1], app.match(/category\.label/g)?.[0] || ''].join(' ');
const prohibited = ['推薦', '優先', '答案', '已核對', '可用'];
function contrast(a, b) {
  const rgb = (hex) => [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255).map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  const luminance = (hex) => { const [r, g, b] = rgb(hex); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const [high, low] = [luminance(a), luminance(b)].sort((left, right) => right - left);
  return Number(((high + 0.05) / (low + 0.05)).toFixed(2));
}
const result = { items: data.items.length, categoryCounts, badItems: bad.length, prohibitedPresentationTerms: prohibited.filter((term) => presentation.includes(term)), imageTags: (html.match(/<img\b/gi) || []).length, contrast: { inkOnPaper: contrast('#153b37', '#f7f0df'), inkOnLight: contrast('#153b37', '#fffdf6'), softOnLight: contrast('#375850', '#fffdf6') } };
console.log(JSON.stringify(result, null, 2));
if (result.badItems || result.prohibitedPresentationTerms.length || Object.values(result.contrast).some((ratio) => ratio < 4.5)) process.exitCode = 1;
