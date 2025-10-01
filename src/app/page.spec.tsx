import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page';

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
}));

test('Page', () => {
  render(<Page />);
  expect(screen.getByText('加入遊戲')).toBeInTheDocument();
  expect(screen.getByLabelText('Player Name')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Join' })).toBeInTheDocument();
});
