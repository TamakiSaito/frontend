'use client';

import React, { useState, useCallback, useDebugValue } from 'react';


// カスタムフックは関数として呼び出す必要があり、JSX では利用できません

// Custom Hook: useInput
const useInput = () => {
  // 現在の入力値を保持するフック
  const [state, setState] = useState('');
  // input が変化したら、フック内の状態を更新する
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    },
    []
  );
  // デバッグ用に値を出力する
  // 値は開発者ツールの Components タブに表示される
  useDebugValue(`Input: ${state}`);
  // 現在の入力内容とコールバック関数を返す
  return [state, onChange] as const;
};

// コンポーネント: Input
export const Input = () => {
  const [text, onChangeText] = useInput();
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  );
};

export default useInput;