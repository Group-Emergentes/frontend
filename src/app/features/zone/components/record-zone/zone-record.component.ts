import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, RouterLink } from "@angular/router";
import {ZoneService} from "../../services/zone/zone.service";
import {CreateZone} from "../../models/CreateZone";

@Component({
  selector: 'app-record-zone',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './zone-record.component.html',
  styleUrl: './zone-record.component.css',
})
export class ZoneRecordComponent {
  zoneForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _zoneService: ZoneService,
    private snackBar: MatSnackBar,
    private _router: Router
  ) {
    this.zoneForm = this.fb.group({
      name: ['', Validators.required],
      cropType: ['', Validators.required],
      width: ['', [Validators.required, Validators.min(1)]],
      length: ['', [Validators.required, Validators.min(1)]],
      minimumTemperature: ['', Validators.required],
      maximumTemperature: ['', Validators.required],
      minimumHumidity: ['', Validators.required],
      maximumHumidity: ['', Validators.required],
    });
  }

  onSubmitZone(): void {
    if (this.zoneForm.valid) {
      let newZone:  CreateZone = this.zoneForm.value;
      newZone.clientId = 1;

      this._zoneService.create(newZone).subscribe({
        next: (response) => {
          console.log('Zone Added Successfully:', response);

          this.snackBar.open('The zone has been successfully registered!', 'Close', {
            duration: 5000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['success-snackbar']
          });

          this._router.navigate(['/irrigation-zone']);
        },
        error: (error) => {
          console.error('Error adding zone:', error);

          this.snackBar.open('There was an error registering the area. Please try again.', 'Close', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }
}
