const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  const { name, type } = req.body;
  const userType = "admin";
  try {
    if (userType !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. Only admins can create categories." });
    }

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(409).json({ message: "Category already exists" });
    }

    const newCategory = new Category({ name, type });
    await newCategory.save();
    res.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
