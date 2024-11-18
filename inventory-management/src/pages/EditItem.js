import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemForm from "../components/ItemForm";
import { useParams } from "react-router-dom";

const EditItem = () => {
  const { id } = useParams();
  const [defaultValues, setDefaultValues] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}`)
      .then((response) => setDefaultValues(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (data) => {
    axios
      .put(`http://localhost:5000/items/${id}`, data)
      .then(() => alert("Item updated successfully!"))
      .catch((error) => console.error(error));
  };

  if (!defaultValues) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Item</h1>
      <ItemForm onSubmit={handleSubmit} defaultValues={defaultValues} />
    </div>
  );
};

export default EditItem;
