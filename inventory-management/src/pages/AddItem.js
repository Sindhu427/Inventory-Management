import React from "react";
import axios from "axios";
import ItemForm from "../components/ItemForm";

const AddItem = () => {
  const handleSubmit = (data) => {
    axios
      .post("http://localhost:5000/items", data)
      .then(() => alert("Item added successfully!"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Add Item</h1>
      <ItemForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddItem;
