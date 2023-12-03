const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const regions = new Schema({ email: String }, { strict: false });

module.exports = mongoose.model("regions", regions);
