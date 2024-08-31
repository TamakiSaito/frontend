// Count.jsを開いた時にuseEffect
import { useState, useEffect } from "react";


export default function Count() {
  //let count = 0の代わりに
  const [count, setCount] =useState(0);


  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  // Lifecycle Hooks

  // mounted (returnなし)：countを押した時
  useEffect(() => {
    console.log("mounted");
  }, []);

  // updated : countの数が変わって実行された時
  useEffect(() => {
    console.log("updated:", count);
  },[count]);

  //unmounted (returnあり)：再びcountを押した時
  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);

  return ( 
    <div className="App">
      <div>count : {count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
