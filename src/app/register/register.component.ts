import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone : true,
  imports : [
    RouterModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder, private router : Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  // Getter for easy access to form controls with type assertion
  get formControls() {
    return this.registerForm.controls as { [key: string]: any }; // Use type assertion here
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // Implement your registration logic here (e.g., API call)
    console.log('Registration Form Submitted:', this.registerForm.value);

    // Reset the form
    this.registerForm.reset();
    this.submitted = false;
    this.router.navigate(['movie-list']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
