const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMidleware");

const {
  addInfo,
  updateInfo,
  getInfo,
} = require("../controllers/personalInfoControllers");

router.route("/").get(protect, getInfo).post(protect, addInfo);
router.route("/:id").put(protect, updateInfo);

module.exports = router;
