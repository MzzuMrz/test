const mongoose = require("mongoose");

const ThemeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  allowImages: { type: Boolean, default: false },
  allowVideos: { type: Boolean, default: false },
  allowTexts: { type: Boolean, default: false },
});

module.exports = mongoose.model("Theme", ThemeSchema);
