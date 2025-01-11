'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';

const SSR = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timestamp = new Date().toLocaleString();
    const generatedMessage = `${timestamp}にこのページがサーバーサイドで描画されました`;
    console.log(generatedMessage); // クライアントサイドでのログ
    setMessage(generatedMessage);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export default SSR;
