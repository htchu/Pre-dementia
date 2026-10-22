# 失智照護助手網站

基於 Next.js 的失智照護輔助平台，作為國科會專題研究計畫「基於大型語言模型（LLM）之長照情境多模態對話分析」的入口網站。

## 🎯 功能概述

- **計畫介紹頁** (`/project`)：將研究計畫轉譯為照護者易懂的版本
- **知情同意書說明** (`/consent`)：提供研究倫理與隱私保護資訊
- **照護紀錄系統** (`/care-log`)：讓照護者記錄失智長者的日常問題與協助措施
- **AI 助理預告** (`/chatbot`)：敬請期待的未來功能說明
- **聯絡窗口** (`/contact`)：計畫團隊聯絡資訊

## 🛠️ 技術堆疊

- **框架**：Next.js 15 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS
- **資料庫**：Vercel Postgres (@vercel/postgres)
- **部署**：Vercel

## 📋 專案結構

```
app/
  layout.tsx              # 根佈局：Header + Footer
  globals.css             # 全站樣式
  page.tsx                # 首頁
  project/page.tsx        # 計畫介紹頁面
  consent/page.tsx        # 知情同意書頁面
  care-log/page.tsx       # 照護紀錄頁面
  chatbot/page.tsx        # AI 助理預告頁面
  contact/page.tsx        # 聯絡我們頁面
  api/
    care-logs/
      route.ts            # GET 列表、POST 新增照護紀錄
      [id]/route.ts       # PATCH 編輯、DELETE 刪除

components/
  Header.tsx              # 導覽列（含手機版選單）
  Footer.tsx              # 頁尾
  CareLogForm.tsx         # 照護紀錄表單
  CareLogList.tsx         # 照護紀錄清單

lib/
  db.ts                   # Vercel Postgres 連線工具函數

db/
  schema.sql              # 資料庫 Schema

.env.local.example        # 環境變數範例
next.config.ts            # Next.js 設定
tailwind.config.ts        # Tailwind CSS 設定
tsconfig.json             # TypeScript 設定
```

## 🚀 快速開始

### 1. 本機開發環境設定

```bash
# 安裝依賴
npm install

# 複製環境變數範例
cp .env.local.example .env.local

# 啟動開發伺服器
npm run dev
```

開啟 http://localhost:3000 即可預覽網站。

### 2. 資料庫設定（Vercel Postgres）

**重要**：使用者需在 Vercel 專案後台手動建立 Postgres：

1. 登入 Vercel 帳號（https://vercel.com）
2. 進入您的專案 Dashboard
3. 點擊「Storage」標籤
4. 點擊「Create」→ 選擇「Postgres」
5. 按照指示完成建立並連接到專案
6. 複製「Postgres URL」到 `.env.local`：
   ```
   POSTGRES_URL=postgresql://...
   ```

### 3. 初始化資料庫 Schema

本機開發時，使用 Vercel CLI 自動載入環境變數：

```bash
vercel env pull .env.local

# 使用 psql 或 Vercel 的 Query 介面執行：
# 複製 db/schema.sql 的內容，在 Vercel 的 Query 頁面執行一次即可
```

或用命令列（需要安裝 PostgreSQL 客戶端）：

```bash
psql "$POSTGRES_URL" -f db/schema.sql
```

### 4. 部署到 Vercel

```bash
# 登入 Vercel
vercel login

# 部署到正式環境
vercel --prod
```

或連接 GitHub 倉庫後，在 Vercel 專案設定中啟用自動部署。

## 📊 資料庫 Schema

```sql
CREATE TABLE care_logs (
  id SERIAL PRIMARY KEY,
  caregiver_name TEXT,              -- 照護者稱呼（選填）
  patient_nickname TEXT,             -- 失智長者代稱（不含真名）
  log_date DATE NOT NULL,            -- 紀錄日期
  category TEXT,                     -- 問題類別：情緒困擾/記憶與認知/日常生活/其他
  issue TEXT NOT NULL,               -- 問題描述
  action TEXT,                       -- 已採取的協助措施
  created_at TIMESTAMPTZ DEFAULT now()
);
```

## 🎨 設計特點

- **青綠色調**：參考衛福部社區照顧關懷網的政府網站風格
- **高對比度**：適合年長使用者閱讀
- **響應式設計**：支援手機、平板、桌面版面
- **RWD 導覽**：手機版含漢堡選單
- **大字級**：預設 16px，適合年長使用者
- **無障礙考量**：語義 HTML、高對比按鈕、鍵盤導航支援

## 📝 後續開發計畫

1. **AI Chatbot 整合**：串接 LLM API（如 Claude、ChatGPT），分析照護紀錄
2. **帳號與登入系統**（可選）：讓照護者跨裝置同步紀錄
3. **統計儀表板**：顯示照護者自己的紀錄趨勢
4. **行動 App 版本**：React Native 或 Flutter 版本
5. **研究團隊後台**：讓研究人員管理數據與生成報告

## 📞 聯絡資訊

- **計畫主持人**：朱學亭 副教授
- **服務機構**：靜宜大學資訊學院
- **計畫期程**：2026年8月 – 2028年7月
- **計畫編號**：115WFD2310066

## 📄 授權

本專案代碼為開放原始碼，遵循 ISC 授權。

---

**註**：此網站目前為展示與原型版本。所有照護紀錄資料不會與個人隱私資訊綁定（不蒐集真實姓名）。
正式參與研究計畫時，所有數據蒐集與使用將依照 IRB 倫理審查規範進行。
