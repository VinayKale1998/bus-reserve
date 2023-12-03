const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const busOwner = new Schema({
  name: {
    type: "String",
    required: [true, "bus name required"],
  },

  category: {
    type: String,
    require: [true, "Category required"],
  },
  totalWindowSeatsAvailable: {
    type: Number,
    require: [true, "window seats required"],
  },
  totalSeats: {
    type: Number,
    required: [true, "totalSeats is required"],
  },
  bus_no: {
    type: String,
    required: [true, "bus_no is required"],
  },
  rating: {
    type: Number,
    required: [true, "rating name required"],
  },
  amenities: {
    type: [String],
    required: [true, "amenities are required"],
  },
});

module.exports = mongoose.model("busOwner", busOwner);
