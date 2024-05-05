const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true, enum: ["image", "video", "document"] },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
