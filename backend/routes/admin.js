const express = require('express');
const router = express.Router();
const Screen = require('../models/Screen'); // Assuming you have a Screen model
const Movie = require('../models/Movie'); // Assuming you have a Movie model
// const MenuItem = require('../models/Menu'); // Assuming you have a Menu/MenuItem model

// POST /api/admin/screens - Create a new screen
router.post('/screens', (req, res) => {
  const { name, seats } = req.body;

  // Example: Create a new screen instance
  const newScreen = new Screen(
    1,           // Replace with actual ID generation logic (e.g., UUID)
    name,
    seats
  );

  // Return the newly created screen
  res.status(201).json(newScreen);
});

// GET /api/admin/screens/:id - Get a specific screen by ID
router.get('/screens/:id', (req, res) => {
  const screenId = req.params.id;

  // Example: Retrieve screen from database or storage
  const screen = new Screen(
    screenId,
    'Screen 1',  // Example screen name
    60           // Example number of seats
  );

  res.json(screen);
});

// PUT /api/admin/screens/:id - Update an existing screen by ID
router.put('/screens/:id', (req, res) => {
  const screenId = req.params.id;
  const { name, seats } = req.body;

  // Example: Update screen in the database or storage
  const updatedScreen = {
    id: screenId,
    name: name,
    seats: seats
  };

  res.json(updatedScreen);
});

// DELETE /api/admin/screens/:id - Delete a screen by ID
router.delete('/screens/:id', (req, res) => {
  const screenId = req.params.id;

  // Example: Delete screen from the database or storage
  res.json({ message: `Screen ${screenId} has been deleted` });
});

// POST /api/admin/movies - Create a new movie
router.post('/movies', (req, res) => {
  const { title, genre, showtimes } = req.body;

  // Example: Create a new movie instance
  const newMovie = new Movie(
    1,           // Replace with actual ID generation logic (e.g., UUID)
    title,
    genre,
    showtimes
  );

  // Return the newly created movie
  res.status(201).json(newMovie);
});

// GET /api/admin/movies/:id - Get a specific movie by ID
router.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;

  // Example: Retrieve movie from database or storage
  const movie = new Movie(
    movieId,
    'Avengers: Endgame',  // Example movie title
    'Action',              // Example genre
    ['10:00 AM', '2:00 PM', '6:00 PM'] // Example showtimes
  );

  res.json(movie);
});

// PUT /api/admin/movies/:id - Update an existing movie by ID
router.put('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  const { title, genre, showtimes } = req.body;

  // Example: Update movie in the database or storage
  const updatedMovie = {
    id: movieId,
    title: title,
    genre: genre,
    showtimes: showtimes
  };

  res.json(updatedMovie);
});

// DELETE /api/admin/movies/:id - Delete a movie by ID
router.delete('/movies/:id', (req, res) => {
  const movieId = req.params.id;

  // Example: Delete movie from the database or storage
  res.json({ message: `Movie ${movieId} has been deleted` });
});

// POST /api/admin/menu - Create a new menu item
router.post('/menu', (req, res) => {
  const { name, price } = req.body;

  // Example: Create a new menu item instance
  const newMenuItem = new MenuItem(
    1,           // Replace with actual ID generation logic (e.g., UUID)
    name,
    price
  );

  // Return the newly created menu item
  res.status(201).json(newMenuItem);
});

// GET /api/admin/menu/:id - Get a specific menu item by ID
router.get('/menu/:id', (req, res) => {
  const menuItemId = req.params.id;

  // Example: Retrieve menu item from database or storage
  const menuItem = new MenuItem(
    menuItemId,
    'Popcorn',   // Example menu item name
    5.99         // Example menu item price
  );

  res.json(menuItem);
});

// PUT /api/admin/menu/:id - Update an existing menu item by ID
router.put('/menu/:id', (req, res) => {
  const menuItemId = req.params.id;
  const { name, price } = req.body;

  // Example: Update menu item in the database or storage
  const updatedMenuItem = {
    id: menuItemId,
    name: name,
    price: price
  };

  res.json(updatedMenuItem);
});

// DELETE /api/admin/menu/:id - Delete a menu item by ID
router.delete('/menu/:id', (req, res) => {
  const menuItemId = req.params.id;

  // Example: Delete menu item from the database or storage
  res.json({ message: `Menu item ${menuItemId} has been deleted` });
});

module.exports = router;
