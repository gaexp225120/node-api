const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product name must be provided"],
  },
  featured: {
    type: Number,
    default: false,
  },
  rating: {
    type: Number,
    default: 4,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: ["ikea", "liddy", "caressa", "marcos"],
    message: "{VALUE} is not supported",
  },
});

module.exports = mongoose.model("Produdct", productSchema);
