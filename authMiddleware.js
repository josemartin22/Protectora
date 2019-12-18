if (process.env.NODE_ENV !== "production") require("dotenv").config();
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  // Get token
  const token = req.header("Authorization");

  // Check for token
  if (!token) return res.status(401).json({ msg: "unauthorized" });

  try {
    // Verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.payload = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Invalid token" });
  }
}

module.exports = auth;
