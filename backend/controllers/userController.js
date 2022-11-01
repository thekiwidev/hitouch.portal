const asyncHandler = require("express-async-handler");

// @route       POST
// @desc        creata a new user
// @access      Public

const createUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text filed");
  }
  res.status(200).json({ message: "Create User" });
});

// @route       GET
// @desc        get a specific user
// @access      Private

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User" });
});

// @route       PUT
// @desc        Update a specific user
// @access      Privare

const updateUser = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Update User with the id: ${req.params.id}` });
});

// @route       DELETE
// @desc        delete a specific user
// @access      Private

const deleteUser = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Delete User with the id: ${req.params.id}` });
});

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
