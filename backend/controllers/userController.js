const asyncHandler = require("express-async-handler");

const User = require("../models/userModels");

// @route       POST
// @desc        creata a new user
// @access      Public

const createUser = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add text filed");
  }

  const user = await User.create({
    name: req.body.name,
  });
  res.status(200).json(user);
});

// @route       GET
// @desc        get a specific user
// @access      Private

const getUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
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
