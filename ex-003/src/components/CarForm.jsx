import React, { useState } from "react";

const CarForm = ({ onSubmit }) => {
  const [car, setCar] = useState({ make: "", model: "", year: "", price: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(car);
    setCar({ make: "", model: "", year: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Make:
        <input
          type="text"
          name="make"
          value={car.make}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="text"
          name="year"
          value={car.year}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={car.price}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
