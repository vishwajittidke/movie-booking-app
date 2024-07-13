import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  standalone : true,
  imports : [
    HttpClientModule,
    RouterLink,
    RouterModule,
    FormsModule,
    CommonModule
  ]
})
export class BookingComponent implements OnInit {
  movies : any[] = [];
  movie: any = {
    image : 'https://images.alphacoders.com/111/thumb-1920-1119553.jpg',
    title: 'Avengers: Endgame',
    genre: 'Action, Adventure, Sci-Fi',
    showtime: '12:00 PM'
  };

  seats: { booked: boolean }[] = Array(50).fill({ booked: false });

  selectedSeats: number[] = [];
  bookingConfirmed: boolean = false;
  confirmationMessage: string = '';

  constructor(private route : ActivatedRoute, private router : Router, private http : HttpClient) { }

  // ngOnInit(): void {
  //   // Simulate already booked seats (for demonstration)
  //   this.seats[10].booked = false;
  //   this.seats[15].booked = false;
  //   this.seats[20].booked = false;
  // }

  ngOnInit(): void {
    // Retrieve movie title from route parameters
    this.route.params.subscribe(params => {
      const movieTitle = params['title'];
      // Assuming 'movies' data is hardcoded for demonstration, find the matching movie
      this.movie = this.movies.find(movie => movie.title === movieTitle) || this.movie;
    });
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
    const booking = {
      movie: this.movie.title,
      seats: this.selectedSeats
    };

    this.http.post('http://localhost:4200/api/booking', booking).subscribe(
      (response: any) => {
        this.bookingConfirmed = true;
        this.confirmationMessage = `Booking confirmed for ${this.movie.title}, seats ${this.selectedSeats.join(', ')}`;
      },
      error => {
        console.error('Error booking:', error);
      }
    );
    this.router.navigate(['/booking']);
  }

  proceedToPayment(): void {
    this.router.navigate(['/payment'], { queryParams: { seats: JSON.stringify(this.selectedSeats) } });
  }
}
