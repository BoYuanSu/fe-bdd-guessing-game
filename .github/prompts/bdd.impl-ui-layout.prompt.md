---
mode: agent
description: Task: Do UI Layout Implementation
---

# Goal

這個指令的目標是根據給定的 BDD feature scenario 的 step 內容，產生對應的前端 UI 佈局實作程式碼 (UI Layout Implementation Code)，直到 step 的測試通過為止。

# Implementation Constraints
- 不需實作任何後端邏輯或 API 呼叫，專注於前端 UI 佈局的實作。

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

並且存在以下的 UI 元素查詢測試程式碼：

```tsx
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GroupMemberDialog } from './GroupMemberDialog'; // 假設這是你的元件路徑

Given('使用者開啟群組彈窗', () => {
  render(<GroupMemberDialog open />); // 假設這是開啟彈窗的程式碼
});

When('使用者在 {string} 下拉選單選擇 "<role>"', async (ctx, fieldName: string) => {
  const select = screen.getByLabelText(fieldName);
  await user.click(select);
  const container = screen.getByRole('listbox', { name: 'select-dropdown' });
  expect(container).toBeInTheDocument();
  const option = within(container).getByText(dt['role']);
  await user.click(option);
});

And('使用者點擊 {string} 按鈕', async (ctx, buttonLabel: string) => {
  const button = screen.getByRole('button', { name: buttonLabel });
  await user.click(button);
});

Then('應該呼叫 "/api/v1/group/member" API，並帶有參數 "<role_id>"', async () => {
  // 
});
```

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

你應該產生以下的 UI 佈局實作程式碼：

```tsx
// GroupMemberDialog.tsx
import { Form } from 'antd';
import { SearchFormContainer, SearchSelect } from '@/components/common/Form';
import Modal from '@/components/common/Modal';

type FormDataType = {
  role: 1 | 2 | 3;
};

interface GroupMemberDialogProps {
  open?: boolean;
}

const FormItem = Form.Item<FormDataType>;

const GroupMemberDialog = (props: GroupMemberDialogProps) => {
  const { open } = props;

  const labels = {
    role: '身份',
  };

  return (
    <Modal open={open}>
      <SearchFormContainer>
        <FormItem
          name="role"
          label={labels.role}
        >
          <SearchSelect
            options={[
              { label: '群主', value: 1 },
              { label: '管理', value: 2 },
              { label: '一般', value: 3 },
            ]}
          />
        </FormItem>
      </SearchFormContainer>
    </Modal>
  );
};

export default GroupMemberDialog;
```

# 注意事項
- 實作最小限度的 UI 元素，確保測試程式碼能夠正確引用這些元件即可。
- 如果有提供 component hierarchy，請依照 component hierarchy 來實作 UI 元素。
- 如果有提供設計稿/圖片，請參考設計稿/圖片來實作 UI 元素。
