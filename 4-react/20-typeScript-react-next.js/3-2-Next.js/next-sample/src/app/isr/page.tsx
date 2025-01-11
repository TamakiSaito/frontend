'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const ISR = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timestamp = new Date().toLocaleString();
    const generatedMessage = `${timestamp}にこのページのデータが生成されました`;
    setMessage(generatedMessage);
  }, []);

  return (
    <div>
      <Head>
        <title>ISR Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです。</p>
        <p>{message}</p>
        {/* /ssrへ遷移するためのリンクを作成 */}
        <Link href="/ssr">GO TO SSR PAGE</Link>
      </main>
    </div>
  );
};

export default ISR;
