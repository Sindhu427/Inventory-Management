import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

const ItemForm = ({ onSubmit, defaultValues = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Item Name"
        fullWidth
        margin="normal"
        {...register("itemName", { required: "Item name is required" })}
        error={!!errors.itemName}
        helperText={errors.itemName?.message}
      />
      <TextField
        label="Quantity"
        type="number"
        fullWidth
        margin="normal"
        {...register("quantity", { required: "Quantity is required" })}
        error={!!errors.quantity}
        helperText={errors.quantity?.message}
      />
      <TextField
        label="Price"
        type="number"
        fullWidth
        margin="normal"
        {...register("price", { required: "Price is required" })}
        error={!!errors.price}
        helperText={errors.price?.message}
      />
      <TextField
        label="Description"
        fullWidth
        margin="normal"
        {...register("description")}
      />
      <TextField
        label="Category"
        fullWidth
        margin="normal"
        {...register("category")}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ItemForm;
