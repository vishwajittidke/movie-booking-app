import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-gateway',
  standalone: true,
  imports: [],
  templateUrl: './payment-gateway.component.html',
  styleUrl: './payment-gateway.component.css'
})
export class PaymentGatewayComponent {
  selectedSeats: number[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedSeats = JSON.parse(params['seats'] || '[]');
    });
  }

  completePayment(): void {
    // Logic to complete payment
    alert(`Payment completed for seats: ${this.selectedSeats.join(', ')}`);
    // Navigate to a success or confirmation page if needed
    this.router.navigate(['/movie-list']);
  }
}

