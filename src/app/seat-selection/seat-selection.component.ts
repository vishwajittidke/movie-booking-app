import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css'],
  standalone : true,
  imports : [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class SeatSelectionComponent implements OnInit {
  @Input() screenName!: string;
  rows: number[] = [1, 2, 3, 4, 5]; // Example rows
  seatsPerRow: number = 10; // Example seats per row
  selectedSeats: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  selectSeat(row: number, seatNumber: number): void {
    const seatIdentifier = `${this.screenName}-${row}-${seatNumber}`;
    const index = this.selectedSeats.indexOf(seatIdentifier);

    if (index !== -1) {
      // Seat already selected, deselect it
      this.selectedSeats.splice(index, 1);
    } else {
      // Select the seat
      this.selectedSeats.push(seatIdentifier);
    }
  }

  isSeatSelected(row: number, seatNumber: number): boolean {
    const seatIdentifier = `${this.screenName}-${row}-${seatNumber}`;
    return this.selectedSeats.includes(seatIdentifier);
  }

  // Method to create an array of specified length
  seatsArray(length: number): number[] {
    return Array.from({ length }, (_, index) => index + 1);
  }
}
