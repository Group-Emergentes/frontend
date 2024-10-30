import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ZoneService } from "../../services/zone.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, RouterLink } from "@angular/router";
import { Zone } from "../../models/Zone";

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
  providers: [ZoneService]
})
export class ZoneRecordComponent {
  zoneForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private zoneService: ZoneService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.zoneForm = this.fb.group({
      name: ['', Validators.required],
      crop: ['', Validators.required],
      widthLand: ['', [Validators.required, Validators.min(1)]],
      lengthLand: ['', [Validators.required, Validators.min(1)]],
      minTemperature: ['', [Validators.required, Validators.min(-50), Validators.max(50)]], // Mínimo de temperatura
      maxTemperature: ['', [Validators.required, Validators.min(-50), Validators.max(50)]], // Máximo de temperatura
      minHumidity: ['', [Validators.required, Validators.min(0), Validators.max(100)]], // Mínimo de humedad
      maxHumidity: ['', [Validators.required, Validators.min(0), Validators.max(100)]]  // Máximo de humedad
    });
  }

  onSubmitZone(): void {
    if (this.zoneForm.valid) {
      const newZone: Zone = this.zoneForm.value;

      this.zoneService.createZone(newZone).subscribe({
        next: (response) => {
          console.log('Zone Added Successfully:', response);

          // Mostrar el snackbar de éxito
          this.snackBar.open('¡La zona ha sido registrada correctamente!', 'Cerrar', {
            duration: 8000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['success-snackbar']
          });

          // Redirigir después de guardar
          setTimeout(() => {
            this.router.navigate(['/irrigation-zone']); // Cambia a la ruta deseada después de guardar
          }, 3000);
        },
        error: (error) => {
          console.error('Error al agregar la zona:', error);

          // Mostrar el snackbar de error
          this.snackBar.open('Hubo un error al registrar la zona. Por favor, inténtalo de nuevo.', 'Cerrar', {
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
