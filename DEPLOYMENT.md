# 失智照護助手網站 - 部署指南

## ✅ 已完成的功能

- ✅ 首頁：吸引力強的入口，清晰的導航
- ✅ 照護紀錄系統：完整的表單 + 清單 + CRUD API
- ✅ 計畫介紹：用白話解釋 LLM、多模態分析等概念
- ✅ 知情同意書：研究倫理與隱私保護說明
- ✅ AI 助理預告：2027 年上線的功能預覽
- ✅ 聯絡頁面：團隊資訊 + FAQ
- ✅ 響應式設計：手機、平板、桌面全支援
- ✅ 高對比色調：青綠色政府網站風格

---

## 🚀 快速開始（本機開發）

### 1. 安裝依賴
```bash
cd C:\githome\Pre-dementia
npm install
```

### 2. 本機測試（無資料庫）
首先在沒有資料庫的情況下測試頁面：

```bash
npm run dev
```

開啟 http://localhost:3000，您會看到：
- ✓ 首頁（完全正常）
- ✓ 計畫介紹（完全正常）
- ✓ 知情同意書（完全正常）
- ✓ AI 助理預告（完全正常）
- ✓ 聯絡我們（完全正常）
- ⚠️ 照護紀錄（會顯示資料庫連線錯誤提示，這是正常的）

### 3. 配置 Postgres 資料庫（可選，需部署到 Vercel）

跳過這一步，直接到部署部分。

---

## 📦 部署到 Vercel

### 步驟 1：連接到 GitHub

```bash
# 如果還沒有 GitHub repo，先初始化
git remote add origin https://github.com/YOUR-USERNAME/Pre-dementia.git
git push -u origin main
```

### 步驟 2：在 Vercel 上建立 Postgres 資料庫

1. 登入 https://vercel.com
2. 進入您的專案
3. 點擊 **Storage** 標籤
4. 點擊 **Create** → 選擇 **Postgres**
5. 選擇地區並建立（自動連接到您的專案）
6. 複製 **POSTGRES_URL** 到記事本

### 步驟 3：自動環境變數注入

Vercel 會自動將 `POSTGRES_URL` 注入到 `.env.production`，
您不需要手動配置。

### 步驟 4：初始化資料庫 Schema

部署後，需要執行一次初始化（只需執行一次）：

**方式 A：使用 Vercel CLI**
```bash
vercel env pull .env.local
psql "$POSTGRES_URL" -f db/schema.sql
```

**方式 B：使用 Vercel 的 Query Editor**
1. 在 Vercel 專案的 Storage 頁面
2. 開啟 **Query Editor**
3. 複製 `db/schema.sql` 的內容，貼上並執行

### 步驟 5：部署

**選項 A：自動部署（推薦）**
1. 在 Vercel 連接 GitHub repo
2. 每次 `git push` 到 main 都會自動部署

**選項 B：手動部署**
```bash
vercel --prod
```

---

## 🧪 本機測試照護紀錄功能

如果您想在本機測試照護紀錄的完整功能：

### 1. 使用 Vercel 的開發資料庫

```bash
# 連接到 Vercel 的 Postgres（即使在本機開發）
vercel env pull .env.local

# 啟動開發伺服器
npm run dev
```

### 2. 測試步驟

1. 開啟 http://localhost:3000/care-log
2. 填寫表單：
   - 日期：今天
   - 您的稱呼：「小王」（選填）
   - 失智者代稱：「爸爸」（選填）
   - 問題類別：「情緒困擾」
   - 問題描述：「早上很沒精神，重複問同一個問題」
   - 協助措施：「陪他喝早餐，轉移注意力」
3. 點擊「提交紀錄」
4. 應該會出現在「照護紀錄列表」中
5. 可以點擊「刪除」移除紀錄

---

## 🛠️ 部署後的後續配置

### 補充聯絡資訊

部署後，使用者會在 `/contact` 頁面看到 `[您的聯絡電話]` 和 `[您的聯絡信箱]` 的預留版位。

編輯 `app/contact/page.tsx`，找到這些地方並填入真實資訊：

```typescript
<p className="font-bold text-gray-800">
  [您的聯絡電話]  // 改為：(04) 2632-8001 ext. XXXX
</p>

<p className="font-bold text-gray-800">
  [您的聯絡信箱]  // 改為：research@pu.edu.tw
</p>
```

然後提交並推送：
```bash
git add app/contact/page.tsx
git commit -m "Update contact information"
git push
```

Vercel 會自動部署這個更新。

---

## 📊 生產環境檢查清單

部署前，確保以下項目都完成：

- [ ] 所有頁面在 http://localhost:3000 都能訪問
- [ ] 本機測試過照護紀錄的新增、查看、刪除功能
- [ ] 確認沒有 console 錯誤
- [ ] `npm run build` 成功完成
- [ ] GitHub 倉庫推送最新提交
- [ ] Vercel Postgres 資料庫已建立
- [ ] Postgres schema 已初始化（執行 db/schema.sql）
- [ ] 聯絡資訊已補充（不要留著 `[您的...]` 預留版位）
- [ ] 在 Vercel 的正式域名上測試照護紀錄功能

---

## 🔗 上線後的 URL 結構

部署完成後，您的網站會在：

```
https://your-project.vercel.app/
├── /                    首頁
├── /project            計畫介紹
├── /consent            知情同意書
├── /care-log           照護紀錄系統
├── /chatbot            AI 助理預告
└── /contact            聯絡我們
```

API 端點：
```
POST   /api/care-logs          新增照護紀錄
GET    /api/care-logs          列表照護紀錄
DELETE /api/care-logs/[id]     刪除照護紀錄
```

---

## 🐛 常見部署問題

### 1. 照護紀錄頁面出現「無法載入照護紀錄」

**原因**：Postgres 資料庫未初始化或連線字串不對

**解決**：
```bash
# 確認 POSTGRES_URL 已設定
vercel env list

# 重新執行 schema.sql
psql "$POSTGRES_URL" -f db/schema.sql
```

### 2. 表單提交失敗

**原因**：API 端點有問題或資料庫連線失敗

**檢查**：
1. 查看瀏覽器的 DevTools → Network 標籤
2. 檢查 `POST /api/care-logs` 的回應
3. 在 Vercel 的 Functions 日誌中查看錯誤

### 3. 樣式異常（按鈕顏色不對、字體不對）

**原因**：Tailwind CSS 沒有正確編譯

**解決**：
```bash
npm run build
# 如果還是有問題，試試：
npm install
npm run build
```

---

## 💡 後續改進方向

1. **使用者帳號系統**：讓照護者跨裝置同步紀錄
2. **AI Chatbot 整合**：串接真正的 LLM API
3. **數據儀表板**：顯示照護者自己的紀錄統計
4. **行動 App**：React Native 或 Flutter 版本
5. **研究團隊後台**：讓研究人員管理和分析數據

---

## 📞 需要幫助？

- 查看 README.md 獲取技術詳情
- 查看 IMPLEMENTATION_GUIDE.md 獲取開發指南
- 檢查 Vercel 的日誌：Dashboard → Functions → 最近的日誌

祝您部署順利！🚀
