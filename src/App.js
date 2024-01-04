import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <buttin
          data-testid="minus-button"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </buttin>
        <buttin
          data-testid="plus-button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </buttin>
      </header>
    </div>
  );
}

export default App;
