const jwt = require("jsonwebtoken");
const User = require("../models/User");

// middleware to validate token (Protected routes)
const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");

  //Check if token is valid
  if (!token) return res.status(401).json({ error: "Acces denied" });

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = user;
  } catch (error) {
    return res.status(400).json({ error: "Token not valid" });
  }

  // Check If user exist in DB
  const UserExist = await User.findById(req.user.id);
  if (!UserExist) {
    return res.status(404).json({ error: "User not found" });
  }
  next(); // Continue
};

module.exports = verifyToken;
