import React, { useState } from "react";

function DynamicTable({ columns, onSubmit }) {
  const [rows, setRows] = useState([]);

  const handleChange = (e, rowIndex, columnIndex) => {
    const { value } = e.target;
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[rowIndex] = {
        ...updatedRows[rowIndex],
        [columns[columnIndex].name]: value,
      };
      return updatedRows;
    });
  };

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      columns.reduce((row, column) => ({ ...row, [column.name]: "" }), {}),
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(rows);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.name}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td key={`${rowIndex}-${columnIndex}`}>
                    <input
                      type={column.type || "text"}
                      value={row[column.name]}
                      onChange={(e) => handleChange(e, rowIndex, columnIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleAddRow}>
          Add Row
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DynamicTable;
