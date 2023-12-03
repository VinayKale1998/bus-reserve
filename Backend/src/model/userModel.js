const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

let Users = new Schema({
  username: { type: String, required: [true, "Username not provided"] },
  password: { type: String, required: [true, "Password invalid"] },
  role: {
    type: String,
    required: [true, "Role not provided"],
    default: "customer",
  },
});

module.exports = mongoose.model("Users", Users);
