// auth.js - Controller for user authentication
const express = require('express');
const router = express.Router();

// Placeholder user data (in a real application, use a database)
let users = [];

// Register a new user
const register = (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation (in a real application, use more robust validation)
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user
  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Login user
const login = (req, res) => {
  const { email, password } = req.body;

  // Simple validation (in a real application, use more robust validation)
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  // Find user
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(400).json({ message: 'User not found or incorrect password' });
  }

  res.json({ message: 'Login successful', user });
};

// Export the functions for use in routes
module.exports = {
  register,
  login
};
