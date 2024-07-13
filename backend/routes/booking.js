const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // Assuming you have a Booking model

// POST /api/bookings - Create a new booking
router.post('/booking', (req, res) => {
  const { userId, movieId, seats, totalPrice, status } = req.body;

  // Example: Create a new booking instance
  const newBooking = new Booking(
    1,           // Replace with actual ID generation logic (e.g., UUID)
    userId,
    movieId,
    seats,
    totalPrice,
    status
  );

  // Return the newly created booking
  res.status(201).json(newBooking);
});

// GET /api/bookings/:id - Get a specific booking by ID
router.get('/:id', (req, res) => {
  const bookingId = req.params.id;

  // Example: Retrieve booking from database or storage
  const booking = new Booking(
    bookingId,
    123,         // Example user ID
    1,           // Example movie ID
    ['A1', 'A2'],// Example seats reserved
    20.50,       // Example total price
    'confirmed'  // Example booking status
  );

  res.json(booking);
});

// PUT /api/bookings/:id - Update an existing booking by ID
router.put('/:id', (req, res) => {
  const bookingId = req.params.id;
  const { seats, totalPrice, status } = req.body;

  // Example: Update booking in the database or storage
  const updatedBooking = {
    id: bookingId,
    seats: seats,
    totalPrice: totalPrice,
    status: status
  };

  res.json(updatedBooking);
});

// DELETE /api/bookings/:id - Cancel a booking by ID
router.delete('/:id', (req, res) => {
  const bookingId = req.params.id;

  // Example: Delete booking from the database or storage
  res.json({ message: `Booking ${bookingId} has been cancelled` });
});

module.exports = router;
