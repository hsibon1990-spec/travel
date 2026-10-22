# 中山旅遊資訊｜候選與出發前核對｜本機驗證紀錄 v2 第 2 輪

執行日期：2026-10-22（台北）
範圍：本機 `file://` 靜態頁預覽；未部署、未公開發布。

## 本輪調整

依 Benny 決定，本輪移除「個人資料與付款安全」候選資料；頁面沒有 `#data-governance` fragment 或不可查閱的本機來源連結。其餘核准文案維持不變。

## 實測結果

- 資料結構：24 筆；交通 4、景點／文化 5、餐飲 12、購買／行前核對 3。每張資料卡的名稱、狀態、可引用範圍、出發前確認、來源欄位與外部 HTTP(S) URL 均通過結構檢查；無 fragment 來源。
- 桌機 1280px：成功載入、4 個分類、24 張資料卡、0 張圖片。實際截圖顯示頁首、分類、文化背景和交通雙欄卡片，無錯誤頁或明顯跑版。
- 手機 390px：`scrollWidth=390`、`clientWidth=390`，無橫向捲動；實際截圖為單欄，無破圖或明顯水平溢出。
- 分類操作：點選「餐飲」後 `panel-food` 為可見；從餐飲分類按 End 鍵後焦點為「購買／行前核對」，`aria-selected="true"`。分類控制最小高度讀回 `48px`。
- 本機核對清單：勾選第一項後 `localStorage['zhongshan-check-0']='1'`。
- Console：桌機與手機頁面均預先註冊 console error、pageerror 監聽，讀回 `errors=[]`。
- 圖片與連結：圖片數 `0`；54 個連結均具名；54 個外部連結均有 `target="_blank"` 與 `rel="noopener noreferrer"`。
- 對比：深墨綠／暖米色 10.79:1；深墨綠／近白 12.05:1；次要文字／近白 7.72:1，均高於 4.5:1。
- 靜態程式檢查：`node --check` 通過 `data.js`、`app.js`、`verify-v2.js`、`verify-v2-browser-r2.js`；`git diff --check` 通過。
- 禁詞掃描：頁首、分類、狀態與按鈕等呈現位置未出現「推薦、優先、答案、已核對、可用」。

## 截圖與測試檔

- 桌機 1280px：`evidence/zhongshan-v2-desktop-1280-r2.png`
- 手機 390px：`evidence/zhongshan-v2-mobile-390-r2.png`
- 靜態資料驗證：`evidence/verify-v2.js`
- 瀏覽器互動驗證：`evidence/verify-v2-browser-r2.js`

## 已知限制

外部來源網址只作前往原始資料頁的連結，未將其當期內容寫成本頁事實；動態資訊仍需在出發前向當期官方、承運者或店家確認。