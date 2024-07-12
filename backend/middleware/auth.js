const jwt = require('jsonwebtoken');
const config = require('../config/config'); // Assuming you have a config file for JWT secret

// Middleware function to verify JWT token
module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('Authorization');

  // Check if token doesn't exist
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied, no token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};
