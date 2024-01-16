import { useState } from "react";
import "./App.css";

const App = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  function handleAdd() {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(`Result: ${num1 + num2}`);
    } else {
      setResult("Result: Please enter valid numbers");
    }
  }

  return (
    <div className="simple-form">
      <input
        type="number"
        className="d-block"
        placeholder="Number 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        className="d-block"
        placeholder="Number 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <button type="button" onClick={handleAdd} className="d-block">
        Add
      </button>

      <h2>{result}</h2>
    </div>
  );
};

export default App;
