# Notebook 1 網站更新自測紀錄

測試日期：2026-10-20（台北）
測試範圍：本機靜態伺服器 `python3 -m http.server 8765 --bind 127.0.0.1`，頁面 `http://127.0.0.1:8765/trips/2026-hongkong-zhongshan/index.html`

## 可重現步驟

```sh
cd /opt/data/agents/projects/hk-zhongshan-seniors-2026/travel
python3 -m http.server 8765 --bind 127.0.0.1
# 另一個終端：
python3 verify_notebook_update.py
```

瀏覽器操作：開啟上述 URL；依序點擊「先看重點、交通、景點地圖、商店街・購物、餐廳、周邊一日遊、出發前」七個分頁；在「出發前」切換一個核取方塊後再切回。

## 自動結構檢查

執行：`python3 verify_notebook_update.py`

```json
{
  "tabs": 7,
  "verified_update_boxes": 4,
  "links": 40,
  "empty_or_javascript_links": 0,
  "notebook_items": 5,
  "errors": []
}
```

結果：通過。五筆 JSON 的保守文案與全部十個原始來源 URL 均存在於頁面；七個分頁存在；四個指定分類有更新框；40 個頁面連結皆有非空白、非 `javascript:` 目標。

## 瀏覽器實測

| 項目 | 結果 |
|---|---|
| 桌機 1280px | 通過。七個分頁可依序切換，景點分頁顯示兩則已核對景點更新；無水平溢位（內容寬 1265px、可視寬 1265px）。 |
| 手機 390px | 通過。`scrollWidth = 390`、`clientWidth = 390`，無橫向捲動；`body` 計算字級 18px；七個導覽按鈕為 179×58px 或 366×58px；可見高德連結為 142×44px。 |
| 互動 | 通過。七個分頁皆會設定選取狀態並顯示相應面板；出發前核取方塊可切換並使用既有 localStorage 行為。 |
| Console | 通過。乾淨重載後完成七分頁與核取方塊操作；Browser harness 未回報 console／runtime 錯誤。 |
| 連結結構 | 通過。自動檢查 40 個 `href`，無空值與 `javascript:` 目標；新增的十個官方來源連結逐一對應 JSON。 |

## 截圖

- 390px：`qa/notebook-1-390px.png`
- 桌機：`qa/notebook-1-desktop.png`

未進行公開發布、push 或部署。
