const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

let UserProfile = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  firstname: { type: String, required: [true, "firstname not  provided"] },
  lastname: { type: String, required: [true, "lastname required"] },
  email: { type: String, required: [true, "email not provided"] },
});

module.exports = mongoose.model("UserProfile", UserProfile);
