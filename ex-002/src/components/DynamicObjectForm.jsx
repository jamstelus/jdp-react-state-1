import React, { useState } from "react";

function DynamicObjectForm({ fields, onSubmit }) {
  const [objectValues, setObjectValues] = useState(() => {
    const initialValue = {};
    fields.forEach((field) => {
      initialValue[field.name] = field.initialValue || "";
    });
    return initialValue;
  });
  const [newFieldLabel, setNewFieldLabel] = useState("");
  const [newFieldName, setNewFieldName] = useState("");
  const [newFieldType, setNewFieldType] = useState("text");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjectValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const newField = {
      name: newFieldName,
      label: newFieldLabel,
      type: newFieldType,
    };
    fields.push(newField);
    setObjectValues((prevValues) => ({ ...prevValues, [newFieldName]: "" }));
    setNewFieldLabel("");
    setNewFieldName("");
    setNewFieldType("text");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(objectValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          New Field Label:
          <input
            type="text"
            value={newFieldLabel}
            onChange={(e) => setNewFieldLabel(e.target.value)}
          />
        </label>
        <label>
          New Field Name:
          <input
            type="text"
            value={newFieldName}
            onChange={(e) => setNewFieldName(e.target.value)}
          />
        </label>
        <label>
          New Field Type:
          <select
            value={newFieldType}
            onChange={(e) => setNewFieldType(e.target.value)}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="date">Date</option>
          </select>
        </label>
        <button onClick={handleAddField}>Add Field</button>
      </div>
      <div>
        Form Object: 
        {fields.map((field) => (
          <div>
            <label key={field.name}>
              {field.label}:
              <input
                type={field.type}
                name={field.name}
                value={objectValues[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
              />
            </label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicObjectForm;
