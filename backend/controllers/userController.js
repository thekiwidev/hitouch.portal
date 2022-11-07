const asyncHandler = require("express-async-handler");

const Student = require("../models/studentModels");

// ==================================
// CREATE A STUDENT
// @route       POST
// @desc        creata a new user
// @access      Public
const createUser = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add text filed");
  }

  const student = await Student.create({
    name: req.body.name,
  });
  res.status(200).json(student);
});

// ==================================
// GET STUDENTS
// @route       GET
// @desc        get a specific user
// @access      Private
const getUser = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

// ==================================
// UPDATE A STUDENT
// ==================================
// @route       PUT
// @desc        Update a specific user
// @access      Privare
const updateUser = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(400);
    throw new Error(`Student not found`);
  }

  const upStudent = await Student.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  res.status(200).json(upStudent);
});

// ==================================
// DELETE A STUDENT
// ==================================
// @route       DELETE
// @desc        delete a specific user
// @access      Private
const deleteUser = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(400);
    throw new Error(`Student not found`);
  }

  student.remove();

  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
