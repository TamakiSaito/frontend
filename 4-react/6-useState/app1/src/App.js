import "./App.css";
import { useState } from "react";


export default function App() {
  // let count = 0の代わりに
  // 「setState」は[count, setCount]の「count」を変更する「関数」
  const [count, setCount] =useState(0);


  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return ( 
    <div className="App">
      <div>count : {count}</div>
      {/* 「+」「-」のボタンを押した時に動かす為に関数が必要↑で{increase}{decrease}の矢印関数を使って↓で表示 */}
      {/* 関数を呼び出す場合キャメルケース：onClick */}
      {/* 関数は絶対constで定義 */}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
