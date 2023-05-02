import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    try {
      setResult(eval(inputValue));
      setInputValue("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Calculate</button>
      </form>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
