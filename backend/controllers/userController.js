const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const Student = require("../models/studentModels");

// ==================================
// CREATE A STUDENT
// @route       POST api/users
// @desc        creata a new user
// @access      Public
const registerStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // CHECK IF USER EXIST
  const userExist = await Student.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error(`User with the email ${email}  already exist`);
  }

  // HASH THE PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // CREATE THE STUDENT
  const student = await Student.create({
    email,
    password: hashedPassword,
  });

  if (student) {
    res.status(201).json({
      _id: student.id,
      email: student.email,
      token: generateToken(student._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }

  // res.json({ message: "Register User" });
});

// ==================================
// LOGIN STUDENTS
// @route       POST api/users/login
// @desc        Authenticate Student
// @access      Public
const loginStudent = asyncHandler(async (req, res) => {
  // Get the email and password
  const { email, password } = req.body;

  // CHECK FOR EMAIL
  const student = await Student.findOne({ email });

  if (student && (await bcrypt.compare(password, student.password))) {
    res.status(201).json({
      _id: student.id,
      email: student.email,
      token: generateToken(student._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// ==================================
// GET STUDENT DATA
// ==================================
// @route       GET api/user/me
// @desc        get a specific user account info
// @access      Private
const getStudent = asyncHandler(async (req, res, next) => {
  const { _id, email } = await Student.findById(req.student.id);

  res.status(200).json({
    id: _id,
    email,
  });
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

// GENERATE JWT TOKEN
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerStudent,
  loginStudent,
  getStudent,
  deleteUser,
};
