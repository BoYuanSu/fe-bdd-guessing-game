# 猜數字遊戲 (1A2B Guessing Game)

這是一個使用 Next.js 15 和 TypeScript 開發的多人猜數字遊戲，目標是採用 AIxBDD 驅動開發方法，建立前端領域的 AI 工作流標準。

## 技術堆疊

- **前端框架**: Next.js 15 (App Router) + React 19
- **語言**: TypeScript (strict mode)
- **樣式**: TailwindCSS v4
- **測試**: Vitest + [@amiceli/vitest-cucumber](https://vitest-cucumber.miceli.click/) (BDD)
- **建構工具**: Turbopack (Next.js 原生)

## 專案結構

```
src/
├── app/                    # Next.js App Router 頁面
├── components/             # 可重用元件
│   └── [ComponentName]/    # 元件資料夾
│       ├── index.ts        # 匯出檔案
│       ├── ComponentName.tsx
│       └── feature/        # BDD 測試檔案
│           ├── ComponentName.feature
│           └── ComponentName.spec.tsx
tests/                      # 全域測試配置
```

## 開始使用

### 環境需求

- Node.js (建議版本 22 或更高版本，根據 [.nvmrc](.nvmrc) 檔案)
- npm

### 安裝

```bash
npm install
```

## 可用指令

- **啟動開發伺服器**:
  ```bash
  npm run dev
  ```

- **建立生產版本**:
  ```bash
  npm run build
  ```

- **執行 BDD 測試**:
  ```bash
  npm test
  ```

- **程式碼風格檢查**:
  ```bash
  npm run lint
  ```

- **TypeScript 型別檢查**:
  ```bash
  npm run typecheck
  ```

## Credit

本 Repo 之相關素材參考：https://waterballsa.tw/ai-bdd 的內容