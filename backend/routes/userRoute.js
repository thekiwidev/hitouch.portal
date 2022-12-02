const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMidleware");

const {
  registerStudent,
  loginStudent,
  getStudent,
} = require("../controllers/userController");

router.post("/", registerStudent);
router.post("/login", loginStudent);
router.get("/me", protect, getStudent);

module.exports = router;
