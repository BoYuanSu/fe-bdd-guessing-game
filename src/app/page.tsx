'use client';

import { useRouter } from 'next/navigation';
import { JoinGame } from '../components/JoinGame';

export default function Home() {
  const router = useRouter();

  const handleJoinGame = (playerName: string) => {
    // 將玩家名稱存儲在 sessionStorage 中
    sessionStorage.setItem('playerName', playerName);
    // 導航至遊戲大廳
    router.push('/lobby');
  };

  return <JoinGame onJoinGame={handleJoinGame} />;
}
