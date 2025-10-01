---
mode: agent
description: Task: Do Fake API Service Implementation
---

# Goal

因應 API 服務/契約尚未完成的情況，請根據給定的 BDD feature scenario 的 step 內容，產生對應的假 API 服務實作程式碼 (Fake API Service Implementation Code)，直到 step 的測試通過為止。

# example

舉例來說，假設有以下的 feature scenario：

```gherkin
Feature: 群組成員管理
  Scenario: 搜尋身份
    Given 使用者開啟群組彈窗
    When 使用者在 "身份" 下拉選單選擇 "<role>"
    And 使用者點擊 "搜索" 按鈕
    Then 應該呼叫 "/api/v1/group/member" API，並
```
