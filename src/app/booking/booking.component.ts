import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  movie: any = {
    title: 'Avengers: Endgame',
    genre: 'Action, Adventure, Sci-Fi',
    showtime: '12:00 PM'
  };

  seats: { booked: boolean }[] = Array(50).fill({ booked: false });

  selectedSeats: number[] = [];
  bookingConfirmed: boolean = false;
  confirmationMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    // Simulate already booked seats (for demonstration)
    this.seats[10].booked = true;
    this.seats[15].booked = true;
    this.seats[20].booked = true;
  }

  toggleSeat(index: number): void {
    if (!this.seats[index].booked) {
      const selectedIndex = this.selectedSeats.indexOf(index);
      if (selectedIndex === -1) {
        this.selectedSeats.push(index);
      } else {
        this.selectedSeats.splice(selectedIndex, 1);
      }
    }
  }

  confirmBooking(): void {
    // Simulate booking confirmation (for demonstration)
    setTimeout(() => {
      this.bookingConfirmed = true;
      this.confirmationMessage = `Booking confirmed for ${this.movie.title}, seats ${this.selectedSeats.join(', ')}`;
    }, 1000);
  }

}
