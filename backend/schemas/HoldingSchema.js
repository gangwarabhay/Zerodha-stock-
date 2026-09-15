const { Schema } = require("mongoose");
// hello
const HoldingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});
module.exports = { HoldingSchema };
