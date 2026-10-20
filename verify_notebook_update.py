from html.parser import HTMLParser
from pathlib import Path
import json
import sys

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.tabs = []
        self.updates = 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'a':
            self.links.append(a.get('href', ''))
        if tag == 'button' and a.get('role') == 'tab':
            self.tabs.append(a.get('aria-controls'))
        if tag == 'aside' and 'verified-update' in (a.get('class') or ''):
            self.updates += 1

root = Path(__file__).parent.parent
html = (Path(__file__).parent / 'trips/2026-hongkong-zhongshan/index.html').read_text(encoding='utf-8')
data = json.loads((root / 'notebook-1-網站更新資料.json').read_text(encoding='utf-8'))
page = Page()
page.feed(html)
errors = []
expected_tabs = ['start', 'traffic', 'places', 'shop', 'food', 'day', 'check']
if page.tabs != expected_tabs:
    errors.append(f'tabs mismatch: {page.tabs}')
if page.updates != 4:
    errors.append(f'expected 4 verified update boxes, got {page.updates}')
if any(not href or href.startswith('javascript:') for href in page.links):
    errors.append('empty or javascript links found')
if 'font-size:18px' not in html or 'min-height:44px' not in html:
    errors.append('mobile minimum font/touch CSS missing')
for item in data['items']:
    if item['conservative_copy'] not in html:
        errors.append(f"missing conservative copy: {item['id']}")
    for source in item['sources']:
        if source not in html:
            errors.append(f"missing source URL: {source}")
print(json.dumps({
    'tabs': len(page.tabs),
    'verified_update_boxes': page.updates,
    'links': len(page.links),
    'empty_or_javascript_links': 0 if not any(not href or href.startswith('javascript:') for href in page.links) else 1,
    'notebook_items': len(data['items']),
    'errors': errors,
}, ensure_ascii=False, indent=2))
sys.exit(bool(errors))
