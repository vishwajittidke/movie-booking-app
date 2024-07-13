// admin.js - Controller for admin functionalities
const express = require('express');
const router = express.Router();
// Placeholder screen data (in a real application, use a database)
let screens = [
    { id: 1, name: 'Screen 1', seats: 60 },
    { id: 2, name: 'Screen 2', seats: 50 }
  ];
  
  // Get all screens
  exports.getAllScreens = (req, res) => {
    res.json(screens);
  };
  
  // Update screen details
  exports.updateScreen = (req, res) => {
    const screenId = parseInt(req.params.id);
    const { name, seats } = req.body;
  
    // Placeholder logic to update screen details (in a real application, update database)
    const updatedScreen = screens.find(screen => screen.id === screenId);
    if (!updatedScreen) {
      return res.status(404).json({ message: 'Screen not found' });
    }
  
    updatedScreen.name = name;
    updatedScreen.seats = seats;
  
    res.json({ message: 'Screen updated successfully', updatedScreen });
  };
  
  // Manage bookings
  exports.manageBookings = (req, res) => {
    // Placeholder logic to manage bookings (view, cancel, etc.)
    res.json({ message: 'Manage bookings functionality' });
  };
  
  // Manage food menu
  // exports.manageFoodMenu = (req, res) => {
  //   // Placeholder logic to manage food menu (add, update, delete items)
  //   res.json({ message: 'Manage food menu functionality' });
  // };

  module.exports = {
    getAllScreens,
    updateScreen,
    manageBookings
    // manageFoodMenu
  };
  