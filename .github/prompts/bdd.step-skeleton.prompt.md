---
mode: agent
description: Task: Step Skeleton Generation
---

# Task

請根據給定的 feature scenario，產生該 scenario 中每個 step 的實作骨架 (step skeleton)，禁止實作任何測試相關的代碼，只需確保 BDD 測試不會出現任何FeatureUknowScenarioError、StepAbleUnknowStepError。

# Implementation Constraints

- 不需要實作任何測試相關的代碼
- 不需要測試步驟的具體實作，只需確保 BDD 測試不會出現任何 FeatureUknowScenarioError、StepAbleUnknowStepError。

# example

舉例來說，假設有以下的 feature scenario：

```gherkin
Feature: User login
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid credentials
    Then the user should be redirected to the dashboard
```

你應該產生以下的 step skeleton：

```ts
describe('User login', () => {
  Scenario('Successful login with valid credentials', ({ Given, When, Then, And }) => {
    Given('the user is on the login page', () => {
      // 流程實作骨架
    });

    When('the user enters valid credentials', () => {
      // 流程實作骨架
    });

    Then('the user should be redirected to the dashboard', () => {
      // 流程實作骨架
    });
  });
});
```
