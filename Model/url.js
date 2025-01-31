const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  accessCount: { type: Number, default: 0 },
});

const Url = mongoose.model("Amirali", urlSchema);
module.exports = Url;
