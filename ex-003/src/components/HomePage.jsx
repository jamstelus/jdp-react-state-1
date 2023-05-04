import React, { useState } from "react";
import "../App.css";
import CarTable from "./CarsTable";
import CarForm from "./CarForm";

const carData = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    price: 20000,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2022,
    price: 22000,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2020,
    price: 30000,
  },
];

function HomePage() {
  const [cars, setCars] = useState(carData);

  const onSubmit = (car) => {
    setCars((prevState) => [...prevState, car]);
  };

  return (
    <div>
      <CarForm onSubmit={onSubmit} />
      <CarTable cars={cars} />
    </div>
  );
}

export default HomePage;
