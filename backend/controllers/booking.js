// booking.js - Controller for booking functionalities

// Placeholder movie data (in a real application, use a database)
let movies = [
    { id: 1, title: 'Movie A', genre: 'Action', showtimes: ['10:00 AM', '2:00 PM', '6:00 PM'] },
    { id: 2, title: 'Movie B', genre: 'Comedy', showtimes: ['11:00 AM', '3:00 PM', '7:00 PM'] }
  ];
  
  // Get all movies
  exports.getAllMovies = (req, res) => {
    res.json(movies);
  };
  
  // Get movie by ID
  exports.getMovieById = (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  };
  
  // Reserve tickets for a movie
  exports.reserveTickets = (req, res) => {
    const { movieId, seats, numberOfTickets } = req.body;
  
    // Placeholder logic for ticket reservation (in a real application, integrate with payment gateway)
    const reservationDetails = {
      movieId,
      seats,
      numberOfTickets,
      totalPrice: numberOfTickets * 10 // Placeholder price calculation
    };
  
    res.json({ message: 'Tickets reserved successfully', reservationDetails });
  };
  