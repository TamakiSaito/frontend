import "./App.css";
import { useState } from "react";
import Movies from "./components/Movies";

export default function App() {
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  return (
    <div className="App">
      {/* Moviesをクリックしたら{isMoviesOpen} <Movies />を出す */}
      <button onClick={() =>setIsMoviesOpen(!isMoviesOpen)}>Movies</button>
      <div>{isMoviesOpen && <Movies />}</div>
    </div>
  );
}
