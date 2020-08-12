const mongoose = require("mongoose");
const listSchema = mongoose.Schema({
  date: Date,
  name: String,
  status: Boolean,
  description: String,
  imageFile: Object,
});
module.exports = mongoose.model("List", listSchema);
