import mongoose from "mongoose";
const moment = require("moment");

const dateValidator = (value: Date) => {
  const first = moment().format("YYYY-MM-DD");
  const last = moment("2030-12-30");
  const actual = moment(value);

  if (actual.isSame(first) || actual.isBetween(first, last)) {
    return true;
  } else {
    return false;
  }
};

const tripSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "Date is required"],
    validate: {
      validator: dateValidator,
      msg: "Date is from the past, please select the current or future date",
    },
  },
  from: {
    type: String,
    required: [true, "From is required"],
  },

  to: {
    type: String,
    required: [true, "To is required"],
  },
  busOwnerID: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Bus owner ID is required"],
    ref: "busOwner",
  },
  startTime: {
    type: Date,
    required: [true, "StartTime is required"],
  },
  endTime: {
    type: Date,
    required: [true, "endTime is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  seatsBooked: {
    type: [String],
    required: [true, "seatsBooked is required"],
  },
  bus_no: {
    type: String,
    required: [true, "bus_no is required"],
  },
  amenities_list: {
    type: [String],
    required: [true, "amenities_list is required"],
  },
  busFare: {
    type: Number,
    required: [true, "busFare is required"],
  },
  busName: {
    type: String,
    required: [true, "busName is required"],
  },
});

const Trips = mongoose.model("trips", tripSchema);

export default Trips;
