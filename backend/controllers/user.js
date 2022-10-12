const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation.js");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../helpers/token.js");
const { sendEmailVerification } = require("../helpers/mailer.js");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      gender,
      bYear,
      bMonth,
      bDay,
    } = req.body;

    // email validation
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid Email Address" });
    }

    // user validation if user exits or not

    let check = await User.findOne({ email });

    if (check) {
      return res.status(400).json({
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

    // unique user name generation
    const tempUserName = first_name + last_name;
    const newUserName = await validateUsername(tempUserName);

    const user = await new User({
      first_name,
      last_name,
      username: newUserName,
      email,
      password: cryptPassowrd,
      gender,
      bYear,
      bMonth,
      bDay,
    }).save();
    const emailVerificationToken = generateToken({ id: user._id }, "1h");

    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;

    sendEmailVerification(user.email, user.first_name, url);

    const token = generateToken({ id: user._id.toString() }, "30m");
    // console.log(token);
    res.send({
      id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      varified: user.varified,
      message: "Register Success! Activate your email to start",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.activateAccount = async (req, res) => {
  try {
    const { token } = req.body;
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(user);
    const check = await User.findById(user.id);
    if (check.varified == true) {
      return res
        .status(400)
        .json({ message: "This account is already activated" });
    } else {
      await User.findByIdAndUpdate(user.id, { varified: true });
      return res.status(200).json({ message: "Account has been activated" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "This email is not connected to an account" });
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res
        .status(400)
        .json({ message: "Invalid password.Please try again" });
    }
    const token = generateToken({ id: user._id }, "7d");
    return res.send({
      id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      varified: user.varified,
      message: "Login Success!",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
