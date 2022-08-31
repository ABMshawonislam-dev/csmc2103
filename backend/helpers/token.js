const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expireDate) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: expireDate,
  });
};
