import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

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
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private router : Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Getter for easy access to form controls
  get formControls() {
    return this.loginForm.controls;
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
    // this.router.navigate(['/home']);
  }

  goToRegister() {
    return '/register';
  }
}
