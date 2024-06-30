import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber((a) => a + 11);
  }, []);

  const arttir = () => {
    setNumber((prev) => prev + 1);
  };

  const azalt = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <div className="App">
      <div>{number}</div>
      <button onClick={arttir}>+</button>
      <button onClick={azalt}>-</button>
      <div>Burası SSR ile gelmiştir</div>
    </div>
  );
}

export default App;
