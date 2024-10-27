import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  longInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.longInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.longInForm.valid ) {
      console.log('Login Successful:', this.longInForm.value);
    }

  }

}
