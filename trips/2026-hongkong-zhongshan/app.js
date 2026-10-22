(() => {
  'use strict';
  const data = window.ZHONGSHAN_DATA;
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value).replace(/[&<>'"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const renderSources = (sources) => sources.map(([label, url, checked]) => `<li><a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}</a><small>台北查詢日：${escape(checked)}</small></li>`).join('');
  const card = (item) => {
    const first = item.sources[0];
    return `<article class="card">
      <h3>${escape(item.name)}</h3>
      <span class="status">狀態：${escape(item.status)}</span>
      <dl class="fields">
        <dt>可引用範圍</dt><dd>${escape(item.scope)}</dd>
        <dt>出發前確認</dt><dd>${escape(item.confirm)}</dd>
        <dt>來源與台北查詢日</dt><dd><ul class="source-list">${renderSources(item.sources)}</ul></dd>
      </dl>
      <a class="source-link" href="${escape(first[1])}" target="_blank" rel="noopener noreferrer">查看：${escape(first[0])}</a>
    </article>`;
  };
  const panel = (category, selected) => {
    const items = data.items.filter((item) => item.category === category.id);
    const isCheck = category.id === 'check';
    return `<section class="panel" id="panel-${category.id}" role="tabpanel" aria-labelledby="tab-${category.id}"${selected ? '' : ' hidden'}>
      <div class="section-head"><h2>${escape(category.label)}</h2><p>${items.length} 筆資料；不依優先順序呈現。</p></div>
      ${isCheck ? `<div class="guide"><h3>本機核對清單</h3><p>勾選只儲存在這台裝置的瀏覽器，不會上傳資料。</p><div class="checklist" id="checklist">${data.checklist.map((label, index) => `<label class="check-row"><input type="checkbox" data-check="${index}"><span>${escape(label)}</span></label>`).join('')}</div><p class="storage-note">本頁不蒐集、不保存證件號碼、付款資料、帳號或密碼。</p></div>` : ''}
      <div class="cards">${items.map(card).join('')}</div>
    </section>`;
  };
  $('#page-title').textContent = data.intro.title;
  $('#intro').textContent = data.intro.description;
  $('#background-text').textContent = data.background.text;
  $('#background-sources').innerHTML = data.background.sources.map((source) => `<li><a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.label)}</a><small>台北查詢日：${escape(source.checked)}</small></li>`).join('');
  const tabs = $('#tabs');
  tabs.innerHTML = data.categories.map((category, index) => `<button type="button" role="tab" id="tab-${category.id}" aria-controls="panel-${category.id}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}">${escape(category.label)}</button>`).join('');
  $('#panel-root').innerHTML = data.categories.map((category, index) => panel(category, index === 0)).join('');
  const tabButtons = [...tabs.querySelectorAll('[role="tab"]')];
  const tabPanels = [...document.querySelectorAll('[role="tabpanel"]')];
  const selectTab = (button, focus) => {
    tabButtons.forEach((tab) => {
      const active = tab === button;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      $(`#${tab.getAttribute('aria-controls')}`).hidden = !active;
    });
    if (focus) button.focus();
  };
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => selectTab(button, false));
    button.addEventListener('keydown', (event) => {
      const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      const target = event.key === 'Home' ? 0 : event.key === 'End' ? tabButtons.length - 1 : event.key === 'ArrowRight' ? (index + 1) % tabButtons.length : (index + tabButtons.length - 1) % tabButtons.length;
      selectTab(tabButtons[target], true);
    });
  });
  document.querySelectorAll('[data-check]').forEach((input) => {
    const key = `zhongshan-check-${input.dataset.check}`;
    input.checked = localStorage.getItem(key) === '1';
    input.addEventListener('change', () => localStorage.setItem(key, input.checked ? '1' : '0'));
  });
})();
