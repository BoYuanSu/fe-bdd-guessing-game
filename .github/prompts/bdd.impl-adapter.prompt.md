---
mode: agent
description: Task: Do Service Adapter Implementation
---

# Goal

這個指令的目標是根據給定的 BDD feature scenario 的 step 內容，產生對應的服務轉換器實作程式碼 (Service Adapter Implementation Code)，直到 step 的測試通過為止。

# example

舉例來說，假設有以下的 feature scenario：

```gherkin
Feature: 群組成員管理
  Scenario: 搜尋身份
    Given 使用者開啟群組彈窗
    When 使用者在 "身份" 下拉選單選擇 "<role>"
    And 使用者點擊 "搜索" 按鈕
    Then 應該呼叫 "/api/v1/group/member" API，並帶有參數 "<role_id>"
```
