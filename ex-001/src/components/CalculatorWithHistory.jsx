import React, { useState } from "react";

function CalculatorWithHistory() {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    try {
      const newResult = eval(inputValue);
      setResult(newResult);
      setInputValue("");
      setHistory([...history, { expression: inputValue, result: newResult }]);
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
      <h3>History:</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.expression} = {entry.result}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalculatorWithHistory;
