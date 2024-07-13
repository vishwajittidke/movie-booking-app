import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
// import { MovieListComponent } from './movie-list/movie-list.component';
import { BookingComponent } from './booking/booking.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: AppComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'seat-selection', component: SeatSelectionComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'movie-list', component: MovieListComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'payment', component: PaymentGatewayComponent },
    { path: '**', redirectTo: '' } // Wildcard route for a 404 page, can be customized
  ];
  