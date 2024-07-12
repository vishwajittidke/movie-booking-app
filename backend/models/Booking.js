// models/Booking.js

class Booking {
    constructor(id, userId, movieId, seats, totalPrice, status) {
      this.id = id;             // Unique identifier for the booking
      this.userId = userId;     // ID of the user who made the booking
      this.movieId = movieId;   // ID of the movie booked
      this.seats = seats;       // Array of seat numbers reserved
      this.totalPrice = totalPrice; // Total price of the booking
      this.status = status;     // Status of the booking (e.g., confirmed, pending, cancelled)
      this.createdAt = new Date(); // Timestamp for when the booking was created
    }
  
    // Example method: Calculate and return the number of seats booked
    getNumberOfSeatsBooked() {
      return this.seats.length;
    }
  }
  
  module.exports = Booking;
  