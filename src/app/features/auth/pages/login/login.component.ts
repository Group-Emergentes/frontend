import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  longInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private _authService:AuthService,
              private _router:Router
              ) {
    this.longInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.longInForm.valid ) {
      this._authService.login(this.longInForm.value).subscribe(()=>{
        this._router.navigate(['/dashboard']);
      })
    }

  }

}
