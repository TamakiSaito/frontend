'use client';

import { useState, useEffect } from 'react';

function SayHello() {
  const [data, setData] = useState<{ name: string }>({ name: '' }); // 初期値を空文字に設定
  const [error, setError] = useState<string | null>(null); // エラーメッセージ用の状態

  useEffect(() => {
    // APIを呼び出してデータを取得
    fetch('/api/hello')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((profile) => {
        setData(profile); // データを状態に設定
      })
      .catch((err) => {
        console.error('Failed to fetch data:', err);
        setError('データの取得に失敗しました。'); // エラー状態を設定
      });
  }, []);

  // エラーがある場合の表示
  if (error) {
    return <div>{error}</div>;
  }

  // 正常にデータを取得した場合の表示
  return <div>hello {data.name}</div>;
}

export default SayHello;
