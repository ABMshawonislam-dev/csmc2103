const User = require("../models/User.js");

exports.register = async (req, res) => {
  console.log(req.body);

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

  const user = await new User({
    first_name,
    last_name,
    username,
    email,
    password,
    gender,
    bYear,
    bMonth,
    bDay,
  }).save();
  res.json(user);
};
