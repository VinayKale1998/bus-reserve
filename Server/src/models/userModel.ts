import mongoose from "mongoose";
const Schema = require("mongoose").Schema;

let userSchema = new Schema({
  username: { type: String, required: [true, "Username not provided"] },
  password: { type: String, required: [true, "Password invalid"] },
  role: {
    type: String,
    required: [true, "Role not provided"],
    default: "customer",
  },
});

const Users = mongoose.model("Users", userSchema);

export default Users;
