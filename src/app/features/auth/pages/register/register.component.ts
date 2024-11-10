import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../../../shared/services/auth/auth.service";
import {routes} from "../../../../app.routes";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private _authService: AuthService,) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{9,15}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });

  }

  get passwordsMismatch(): boolean {
    return (
      this.registerForm.get('password')?.value !==
      this.registerForm.get('confirmPassword')?.value
    );
  }

  onSubmit() {
    if (this.registerForm.valid && !this.passwordsMismatch) {
      this._authService.register(this.registerForm.value).subscribe((response)=>{
        console.log(response);
      })
    }

  }

  preventNonNumeric(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length > 9) {
      input.value = input.value.slice(0, 9);
    }
  }
}
