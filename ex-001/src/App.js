import './App.css';
import Calculator from './components/Calculator';
import CalculatorWithHistory from './components/CalculatorWithHistory';
import CalculatorWithVariables from './components/CalculatorWithVariables';
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>Hello React State</h1>
      <hr />
      {/* <h3>Counter</h3>
      <Counter />
      <hr/>
      <h3>Todo</h3>
      <Todo />
      <hr/>
      <h3>Calculator</h3>
      <Calculator />
      <hr/> */}
      <h3>Calculator with History</h3>
      <CalculatorWithHistory />
      <hr/>
      <h3>Calculator with Variables</h3>
      <CalculatorWithVariables />
    </div>
  );
}

export default App;
