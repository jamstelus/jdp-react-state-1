import React from "react";

const CarTable = ({ cars }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index}>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarTable;
