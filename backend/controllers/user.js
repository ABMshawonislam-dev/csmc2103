const { validateEmail, validateLength } = require("../helpers/validation.js");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../helpers/token.js");

exports.register = async (req, res) => {
  const {
    first_name,
    last_name,
    username,
    email,
    password,
    gender,
    bYear,
    bMonth,
    bDay,
  } = req.body;

  // email validation
  if (!validateEmail(email)) {
    res.status(400).json({ message: "Invalid Email Address" });
  }

  // user validation if user exits or not

  let check = await User.findOne({ email });

  if (check) {
    res.status(400).json({
      message: "Email address already exits. Please try another email ",
    });
  }

  // text length check

  if (!validateLength(first_name, 3, 30)) {
    return res
      .status(400)
      .json({ message: "First name must between 3 and 30 character" });
  }
  if (!validateLength(last_name, 3, 30)) {
    return res
      .status(400)
      .json({ message: "Last name must between 3 and 30 character" });
  }
  if (!validateLength(password, 6, 40)) {
    return res
      .status(400)
      .json({ message: "Password must be atleast 6 characters" });
  }

  // password bcrypt
  let cryptPassowrd = await bcrypt.hash(password, 12);

  const user = await new User({
    first_name,
    last_name,
    username,
    email,
    password: cryptPassowrd,
    gender,
    bYear,
    bMonth,
    bDay,
  }).save();
  const token = generateToken({ id: user._id.toString() }, "30m");
  console.log(token);
  res.json(user);
};
