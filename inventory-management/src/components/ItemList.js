import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:5000/items/${id}`)
      .then(() => setItems(items.filter((item) => item._id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item._id}>
            <TableCell>{item.itemName}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell
              style={{
                display: "flex",
                gap: 4,
              }}
            >
              <Button
                component={Link}
                to={`/edit/${item._id}`}
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
              <Button
                onClick={() => deleteItem(item._id)}
                variant="contained"
                color="error"
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemList;
