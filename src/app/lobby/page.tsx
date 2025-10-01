'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GameLobby() {
  const [playerName, setPlayerName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const storedPlayerName = sessionStorage.getItem('playerName');
    if (storedPlayerName) {
      setPlayerName(storedPlayerName);
    } else {
      // 如果沒有玩家名稱，重新導向至首頁
      router.push('/');
    }
  }, [router]);

  if (!playerName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">遊戲大廳</h1>
        <p className="text-lg mb-6 text-gray-600">歡迎, {playerName}!</p>
        <p className="text-gray-500 mb-6">等待其他玩家加入...</p>
        <div className="animate-pulse">
          <div className="h-2 bg-blue-500 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}
