import "./App.css";
import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  // useStateの初期値が「false」 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
     setIsOpen(!isOpen);
  };

  return ( 
    <div className="App">
      {/* Countボタンをクリックしてtoggleされる(falseからtrueになる) */}
      <button onClick={toggle}>Count</button>

      {/* {isOpen}になった時にComponetsの<Count.js>を開ける */}
      <div>{isOpen && <Count />}</div>
    </div>
  );
}
