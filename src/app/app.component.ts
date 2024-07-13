// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
// import { routes } from './app.routes';
// import { LoginComponent } from './login/login.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   standalone: true,
//   template: '<router-outlet></router-outlet>',
//   imports: [
//         LoginComponent,
//         // BrowserModule,
//         // AppRoutingModule,
//         RouterModule,
//         RouterOutlet, 
//         RouterLink, 
//         RouterLinkActive,
//         ReactiveFormsModule,
//         HttpClientModule,
//         CommonModule,
//         FormsModule,
//         RouterOutlet
//       ],
// })

// export class AppComponent 
// {
//   title = 'movie-booking-app';
//   isLoggedIn: boolean = false;
//   isAdmin: boolean = false;
//   currentUser: any; // Define type based on your user model
//   // title: string = 'movie-booking-app';

//   constructor() {}

//   // ngOnInit(): void {
//   //   // Check local storage or session storage for logged in user (mocking)
//   //   const storedUser = JSON.parse(localStorage.getItem('currentUser') || '');
//   //   if (storedUser) {
//   //     this.currentUser = storedUser;
//   //     this.isLoggedIn = true;
//   //     this.isAdmin = this.currentUser.role === 'admin'; // Assuming role-based admin check
//   //   }
//   // }

//   logout(): void {
//     // Clear local storage or session storage on logout
//     localStorage.removeItem('currentUser');
//     this.isLoggedIn = false;
//     this.currentUser = null;
//     this.isAdmin = false;
//   }

//   handleLoginSuccess(user: any): void {
//     this.currentUser = user;
//     this.isLoggedIn = true;
//     this.isAdmin = user.role === 'admin'; // Assuming role-based admin check
//     // Store user details in local storage or session storage (mocking)
//     localStorage.setItem('currentUser', JSON.stringify(user));
//   }
// }

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movie-booking-app';
}

