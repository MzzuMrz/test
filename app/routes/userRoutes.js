const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  verifyUser,
  createCategory,
} = require("../config/controllers/userController");

// Registro y Autenticación de Usuarios
router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile/:userId", getUserProfile);
router.get("/verifyUser", verifyUser);

module.exports = router;
