import { useState, useEffect } from "react";

const VariableInputs = ({ variables, setVariables }) => {
  const handleVariableChange = (variableName, newValue) => {
    setVariables(variableName, newValue);
  };

  const renderVariableInput = (variableName) => {
    return (
      <div key={variableName}>
        <label htmlFor={variableName}>{variableName}</label>
        <input
          type="number"
          id={variableName}
          value={variables[variableName]}
          onChange={(e) => handleVariableChange(variableName, e.target.value)}
        />
      </div>
    );
  };

  return (
    <div>
      {Object.keys(variables).map((variableName) =>
        renderVariableInput(variableName)
      )}
    </div>
  );
};

const Calculator = () => {
  const [formula, setFormula] = useState("");
  const [variables, setVariables] = useState({});
  const [result, setResult] = useState("");

  useEffect(() => {
    const variableNames = formula.match(/[a-zA-Z]+/g);
    if (variableNames) {
      const newVariables = {};
      variableNames.forEach((variableName) => {
        newVariables[variableName] = "";
      });
      setVariables(newVariables);
    } else {
      setVariables({});
    }
  }, [formula]);

  const handleFormulaChange = (e) => {
    setFormula(e.target.value);
  };

  const handleVariableChange = (variableName, newValue) => {
    setVariables((prevVariables) => {
      return {
        ...prevVariables,
        [variableName]: newValue,
      };
    });
  };

  const handleCalculate = () => {
    let calculatedFormula = formula;
    let error = false;
  
    Object.keys(variables).forEach((variableName) => {
      const variableValue = variables[variableName];
      if (!variableValue) {
        error = true;
      } else {
        calculatedFormula = calculatedFormula.replace(
          new RegExp(variableName, "g"),
          variableValue
        );
      }
    });
  
    if (error) {
      setResult("Error: All variables must have a value");
    } else {
      try {
        const finalResult = Function(
          `"use strict";return (${calculatedFormula})`
        )();
        setResult(finalResult);
      } catch (err) {
        setResult("Error: Invalid formula");
      }
    }
  };
  

  return (
    <div>
      <label htmlFor="formula">Formula:</label>
      <input
        type="text"
        id="formula"
        value={formula}
        onChange={handleFormulaChange}
      />

      <VariableInputs
        variables={variables}
        setVariables={handleVariableChange}
      />

      <button onClick={handleCalculate}>Calculate Result</button>

      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;
