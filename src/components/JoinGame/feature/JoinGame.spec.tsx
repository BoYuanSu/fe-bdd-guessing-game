import { loadFeature, describeFeature } from '@amiceli/vitest-cucumber';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi, expect } from 'vitest';
import { JoinGame } from '../JoinGame';

const feature = await loadFeature('./JoinGame.feature');

describeFeature(feature, ({ Scenario }) => {
  Scenario('Successful game join', ({ Given, When, And, Then }) => {
    let onJoinGameMock: ReturnType<typeof vi.fn>;
    let playerName: string;

    Given('a user is on the Join Game page', () => {
      onJoinGameMock = vi.fn();
      render(<JoinGame onJoinGame={onJoinGameMock} />);

      // 驗證頁面元素存在
      expect(screen.getByText('加入遊戲')).toBeInTheDocument();
      expect(screen.getByLabelText('Player Name')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Join' })).toBeInTheDocument();
    });

    When('the user click label {string} and input {string}', (ctx, labelText, inputValue) => {
      playerName = inputValue;
      // 點擊 label 來聚焦輸入欄位
      const label = screen.getByText(labelText);
      fireEvent.click(label);

      // 輸入 "Alice"
      const nameInput = screen.getByLabelText('Player Name');
      fireEvent.change(nameInput, { target: { value: playerName } });

      // 驗證輸入值
      expect(nameInput).toHaveValue(playerName);
    });

    And('the user clicks the {string} button', (ctx, buttonText) => {
      const joinButton = screen.getByRole('button', { name: buttonText });
      fireEvent.click(joinButton);
    });

    Then('the user should be taken to the game lobby', () => {
      // 驗證 onJoinGame 回調函式被呼叫，且參數正確
      expect(onJoinGameMock).toHaveBeenCalledWith(playerName);
      expect(onJoinGameMock).toHaveBeenCalledTimes(1);
    });
  });
});
