const express = require("express");
const router = express.Router();
const { createCategory } = require("../config/controllers/categoryController");
const authMiddleware = require("../config/middleware/authMiddleware");

router.post("/create", authMiddleware, createCategory);

module.exports = router;
