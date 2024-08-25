// Appコンポーネント
// JSX文法

// CSS
import './App.css';

// 1. exportがないとAppをimportできない
export default function App() {
  // JS  
  const name = "Yang";
  const mark = "!";
  
  // XML
  return (
    <div className="App">
        <p className="red">
         おはようございます{name}{mark}
        </p>
    </div>
  );
}
