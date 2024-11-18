const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
