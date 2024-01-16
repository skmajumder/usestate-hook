import { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    number1: "",
    number2: "",
    result: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleAdd() {
    const num1 = parseFloat(formData.number1);
    const num2 = parseFloat(formData.number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setFormData((prevValue) => ({
        ...prevValue,
        result: `Result: ${num1 + num2}`,
      }));
    } else {
      setFormData((prevValue) => ({
        ...prevValue,
        result: "Result: Please enter valid numbers",
      }));
    }
  }

  return (
    <div className="simple-form">
      <input
        type="number"
        className="d-block"
        placeholder="Number 1"
        name="number1"
        value={formData.number1}
        onChange={handleInputChange}
      />
      <input
        type="number"
        className="d-block"
        placeholder="Number 2"
        name="number2"
        value={formData.number2}
        onChange={handleInputChange}
      />

      <button type="button" onClick={handleAdd} className="d-block">
        Add
      </button>

      <h2>{formData.result}</h2>
    </div>
  );
};

export default App;
