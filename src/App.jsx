import "./App.css";

const App = () => {
  function handleAdd() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
      const result = num1 + num2;
      document.getElementById("result").textContent = `Result: ${result}`;
    } else {
      alert("Enter a valid number");
    }
  }

  return (
    <div className="simple-form">
      <input
        type="number"
        name="number1"
        className="d-block"
        id="number1"
        placeholder="Number 1"
      />
      <input
        type="number"
        name="number2"
        className="d-block"
        id="number2"
        placeholder="Number 2"
      />

      <button type="button" onClick={handleAdd} className="d-block">
        Add
      </button>

      <h2 id="result">Result: </h2>
    </div>
  );
};

export default App;
