import "./App.css";
import TicTacToe from "./components/TicTacToe";
import DynamicObjectForm from "./components/DynamicObjectForm";
import DynamicTable from "./components/DynamicTable";

function App() {
  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "age", label: "Age", type: "number", initialValue: 18 },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "example@mail.com",
      required: true,
    },
  ];

  const handleDynamicObjectFormSubmit = (objectValues) => {
    console.log(objectValues);
    // Do something with the object values, like sending them to an API or updating state.
  };

  const handleDynamicTableSubmit = (values) => {
    console.log(values);
  };

  const columns = [
    { name: "name", label: "Name" },
    { name: "age", label: "Age", type: "number" },
    { name: "email", label: "Email", type: "email" },
  ];

  return (
    <div className="App">
      <TicTacToe />
      <hr />
      <h3>Dynamic Object Form</h3>
      <DynamicObjectForm
        fields={fields}
        onSubmit={handleDynamicObjectFormSubmit}
      />
      <hr />
      <h3>Dynamic Table</h3>
      <DynamicTable columns={columns} onSubmit={handleDynamicTableSubmit} />
    </div>
  );
}

export default App;
