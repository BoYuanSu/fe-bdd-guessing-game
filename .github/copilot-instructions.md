# 猜數字遊戲專案 - AI 程式碼助理指導

## 專案概述

這是一個使用 Next.js 15 和 TypeScript 開發的多人猜數字遊戲，採用 BDD (Behavior Driven Development) 測試驅動開發方法。

## 核心架構

### 技術堆疊

- **前端框架**: Next.js 15 (App Router) + React 19
- **語言**: TypeScript (strict mode)
- **樣式**: TailwindCSS v4
- **測試**: Vitest + [@amiceli/vitest-cucumber](https://vitest-cucumber.miceli.click/) (BDD)
- **建構工具**: Turbopack (Next.js 原生)

### 檔案結構慣例

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

## BDD 測試驅動開發

### 測試工作流程

0. **禁止修改 feature 檔案**: 執行 step definitions 實作或功能開發時，嚴格禁止修改已存在的 feature 檔案，確保測試場景的一致性。
1. **先寫 Feature**: 在 `feature/` 資料夾建立 `.feature` 檔案 (Gherkin 語法)
2. **實作 Step Definitions**: 建立對應的 `.spec.tsx` 檔案
3. **執行測試**: 使用 `npm run agent:test`
4. **實作功能**: 根據測試建立元件邏輯

### 關鍵測試模式

- 使用 `@amiceli/vitest-cucumber` 進行 BDD 測試
- 測試檔案必須使用 `loadFeature()` 和 `describeFeature()`

## 開發工作流程

### 重要指令

```bash
npm run dev              # 開發伺服器 (使用 Turbopack)
npm run build           # 生產建構 (使用 Turbopack)
npm test                # 執行 BDD 測試 (互動模式)
npm run agent:test      # Agent 專用指令，執行 BDD 測試 (單次執行)
npm run agent:lint      # Agent 專用指令，針對特定檔案 linting 和格式化
npm run typecheck       # TypeScript 型別檢查
npm run lint            # ESLint 程式碼檢查
```

## 元件開發慣例

### 元件結構

- 每個元件都有專用資料夾
- 使用 `index.ts` 進行乾淨的匯出
- 元件檔案命名：`ComponentName.tsx`
- Props 介面命名：`ComponentNameProps`

### UI 模式

- 所有頁面使用 `'use client'` (客戶端元件)
- 統一的載入狀態：旋轉動畫 + 灰色背景
- 錯誤處理：重定向至首頁如果缺少必要狀態

### 樣式慣例

- 使用 TailwindCSS utility classes
- 主題色彩：藍色 (blue-500) 用於主要動作
- 佈局：`min-h-screen flex items-center justify-center bg-gray-100`
- 卡片樣式：`bg-white p-8 rounded-lg shadow-md`

## 專案特定注意事項

### 測試資料

- 所有使用者互動都需要經過 BDD 場景驗證

## 檔案命名規則

- 元件：PascalCase (`JoinGame.tsx`)
- 測試：`.spec.tsx` 結尾
- Feature 檔案：`.feature` 結尾
- 頁面：`page.tsx`（Next.js App Router 慣例）

## linting 和格式化

- 忽略 warnings，專注於 errors
- 如果出現 ESLint 錯誤，使用 `npm run agent:lint <file-path>` 針對特定檔案進行 linting 和格式化，如果執行後仍有錯誤，請忽略格式的錯誤，繼續開發。
