import "./App.css";
import Movies from "./components/Movies";
import Hello from "./components/Hello";

export default function App() {
  const username = "Yang";
  const mark = "?";

  return (
    <div className="App">
      <p>
        <Hello name={username} mark={mark} />
        <Movies name="Yamamoto" />
        <Movies name="Takahashi" />
      </p>
    </div>
  );
}
