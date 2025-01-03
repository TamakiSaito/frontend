'use client';

import React, { useState, useMemo } from 'react';

export const UseMemoSample = () => {
  const  [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])

  // イベントハンドラ：入力フィールドの値が変更されたときに呼び出される
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prevItems) => {
      // 現在の入力値をitemsに追加する、この時に新しい配列を作成して保存する
      return [...prevItems, text]
    })
    setText('')
  }

  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0)
  }, [items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput}/>
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}

export default UseMemoSample