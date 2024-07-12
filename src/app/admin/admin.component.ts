// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin',
//   standalone: true,
//   imports: [],
//   templateUrl: './admin.component.html',
//   styleUrl: './admin.component.css'
// })
// export class AdminComponent {
//     // Admin panel logic can be implemented here
//     title: string = 'Admin Panel';
  
//     // Example of admin panel functionalities
//     manageUsers() {
//       console.log('Manage users');
//       // Add your logic here
//     }
  
//     viewReports() {
//       console.log('View reports');
//       // Add your logic here
//     }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Report {
  id: number;
  title: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone : true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class AdminComponent implements OnInit {
  title: string = 'Admin Panel';
  users: User[] = [];
  reports: Report[] = [];
  selectedUser: User | null = null;
  selectedReport: Report | null = null;

  ngOnInit() {
    this.loadUsers();
    this.loadReports();
  }

  loadUsers() {
    // In a real application, you would get this data from a service
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' }
    ];
  }

  loadReports() {
    // In a real application, you would get this data from a service
    this.reports = [
      { id: 1, title: 'Monthly Sales', content: 'Report content goes here', date: '2024-07-01' },
      { id: 2, title: 'User Activity', content: 'Report content goes here', date: '2024-07-02' }
    ];
  }

  manageUsers() {
    console.log('Manage users');
    this.selectedReport = null;
  }

  viewReports() {
    console.log('View reports');
    this.selectedUser = null;
  }

  selectUser(user: User) {
    this.selectedUser = user;
    console.log('Selected user:', user);
  }

  selectReport(report: Report) {
    this.selectedReport = report;
    console.log('Selected report:', report);
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
    console.log('Deleted user with ID:', userId);
  }

  deleteReport(reportId: number) {
    this.reports = this.reports.filter(report => report.id !== reportId);
    console.log('Deleted report with ID:', reportId);
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin',
//   template: `
//     <div>
//       <h2>Admin Panel</h2>
//       <!-- Admin panel content here -->
//     </div>
//   `
// })
// export class AdminComponent {}
