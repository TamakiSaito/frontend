'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';

const EnvSample = () => {
  const [serverEnv, setServerEnv] = useState<string | null>(null);

  useEffect(() => {
    // クライアントサイドでは直接 `process.env` を参照せず、公開された `NEXT_PUBLIC_` 変数を利用
    console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);
    setServerEnv(process.env.NEXT_PUBLIC_TEST || 'Not Available');
  }, []);

  return (
    <div>
      <Head>
        <title>Env Variables Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* クライアントサイドで正しく表示 */}
        <p>Server-side Test Value: {serverEnv}</p>
        <p>Client-side Test Value: {process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  );
};

export default EnvSample;
