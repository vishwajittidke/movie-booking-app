import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, createUrlTreeFromSnapshot, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone : true,
  imports : [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  returnUrl!: string;
  
  constructor(private formBuilder: FormBuilder, private router : Router, private route : ActivatedRoute) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Accessing a query parameter
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // Getter for easy access to form controls
  get formControls() {
    return this.loginForm.controls;
  }

  onLoginSubmit(): void {
    // Logic to handle login submission
    this.onLoginSuccess();
  }

  onLoginSuccess(): void {
    this.router.navigateByUrl(this.returnUrl);
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // Implement your login logic here (e.g., authentication service)
    console.log('Login Form Submitted:', this.loginForm.value);
    // Reset the form
    this.loginForm.reset();
    this.submitted = false;
    this.router.navigate(['/movie-list']);
  }
  
  navigateToRegister() {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const urlTree = createUrlTreeFromSnapshot(snapshot, ['register']);
    this.router.navigateByUrl(urlTree);
  }
}
