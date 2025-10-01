---
mode: agent
description: Task: UI Element Query
---

# Goal

這個指令的目標是根據給定的 BDD feature scenario 的 step 內容，產生對應的 UI 元素查詢測試程式碼 (UI Element Query Code)，以便在測試中使用。

# Implementation Constraints

- 不需要實作任何前端程式碼，請專心定義測試步驟中會用到的 UI 元素查詢程式碼。

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

你應該產生以下的 UI 元素查詢程式碼：

```tsx
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GroupMemberDialog } from './GroupMemberDialog'; // 假設這是你的元件路徑

Given('使用者開啟群組彈窗', () => {
  render(<GroupMemberDialog open />); // 假設這是開啟彈窗的程式碼
});

When('使用者在 {string} 下拉選單選擇 "<role>"', async (ctx, fieldName: string) => {
  // UI 元素查詢測試程式碼
  const select = screen.getByLabelText(fieldName);
  await user.click(select);
  const container = screen.getByRole('listbox', { name: 'select-dropdown' });
  expect(container).toBeInTheDocument();
  const option = within(container).getByText(dt['role']);
  await user.click(option);
});

And('使用者點擊 {string} 按鈕', async (ctx, buttonLabel: string) => {
  // UI 元素查詢測試程式碼
  const button = screen.getByRole('button', { name: buttonLabel });
  await user.click(button);
});

Then('應該呼叫 "/api/v1/group/member" API，並帶有參數 "<role_id>"', async () => {
  // 這裡不需要 UI 元素查詢測試程式碼，因為這是 API 呼叫的驗證
});
```

# 注意事項

- 如果你的 step 內容中的測試目標元件還沒建立，可以先建立一個空的元件的基本結構，確保測試程式碼能夠正確引用這些元件。

以上述範例為例，假設 "GroupMemberDialog" 元件還沒建立，你應該先建立一個基本的 "GroupMemberDialog" 元件，然後再撰寫測試程式碼。

```tsx
// GroupMemberDialog.tsx
interface GroupMemberDialogProps {
  open: boolean;
}

const GroupMemberDialog: (props: GroupMemberDialogProps) => {
  const { open } = props;
  // 不需要實作任何前端程式碼，讓測試能夠正確引用這個元件即可。
  return <div>{/* TODO GroupMemberDialog */}</div>;
}

export default GroupMemberDialog;
```
