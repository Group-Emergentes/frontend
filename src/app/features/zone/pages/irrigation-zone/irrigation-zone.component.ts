import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ZoneService} from "../../services/zone.service";
import {Zone} from "../../models/Zone";
import {Sensor} from "../../models/Sensor";
import {Sprinkler} from "../../models/Sprinkler";
import {SensorService} from "../../services/sensor.service";
import {SprinklerService} from "../../services/sprinkler.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-irrigation-zone',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './irrigation-zone.component.html',
  styleUrl: './irrigation-zone.component.css',
  providers: [ZoneService,SensorService, SprinklerService]
})
export class IrrigationZoneComponent  implements OnInit {
  zones: Zone[] = [];
  sensors: Sensor[] = [];
  sprinklers: Sprinkler[] = [];
  selectedZone: Zone | null = null;
  selectedZoneSensors: Sensor[] = [];
  selectedZoneSprinklers: Sprinkler[] = [];
  addSprinklerForm: FormGroup;
  addSensorForm: FormGroup;
  showSprinklerForm = false;
  showSensorForm = false;


  constructor(private zoneService: ZoneService,
              private sensorService: SensorService,
              private sprinklersService: SprinklerService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar
  ) {
    // Formulario para agregar Aspersor
    this.addSprinklerForm = this.fb.group({
      nameId: ['', Validators.required]
    });

    // Formulario para agregar Sensor
    this.addSensorForm = this.fb.group({
      nameId: ['', Validators.required],
      sensorType: ['', Validators.required],
      minimum: ['', Validators.required],
      maximum: ['', Validators.required]
    });
  }



  ngOnInit(): void {
    // Obtiene las zonas
    this.zoneService.getZones().subscribe((data: Zone[]) => {
      this.zones = data;
    });

    // Obtiene los sensores
    this.sensorService.getSensors().subscribe((data: Sensor[]) => {
      this.sensors = data;
    });

    // Obtiene los aspersores
    this.sprinklersService.getSprinklers().subscribe((data: Sprinkler[]) => {
      this.sprinklers = data;
    });
  }

  hasSprinklerOrSensor(zoneId: number): boolean {
    const hasSensor = this.sensors.some(sensor => sensor.zoneId === zoneId);
    const hasSprinkler = this.sprinklers.some(sprinkler => sprinkler.zoneId === zoneId);
    return hasSensor || hasSprinkler;
  }

  showDetails = false;
  showEditOptions = false;

  viewDetails(zone: Zone): void {
    this.selectedZone = zone;
    this.showDetails = true;
    this.showEditOptions = false;
    this.selectedZoneSensors = this.sensors.filter(sensor => sensor.zoneId === zone.id);
    this.selectedZoneSprinklers = this.sprinklers.filter(sprinkler => sprinkler.zoneId === zone.id);
  }

  closeDetails(): void {
    this.selectedZone = null;
    this.selectedZoneSensors = [];
    this.selectedZoneSprinklers = [];
    this.showDetails = false;
    this.showEditOptions = false;
  }
  closeEditOption(): void {
    this.selectedZone = null;
    this.selectedZoneSensors = [];
    this.selectedZoneSprinklers = [];
    this.showDetails = false;
    this.showEditOptions = false;
  }

  onEdit(zone: Zone): void {
    this.selectedZone = zone;
    this.showEditOptions = true;
    this.showDetails = false;
  }

  toggleSprinklerForm(): void {
    this.showSprinklerForm = true;
    this.showSensorForm = false;
  }

  toggleSensorForm(): void {
    this.showSensorForm = true;
    this.showSprinklerForm = false;
  }

  addSprinkler(): void {
    if (this.addSprinklerForm.valid && this.selectedZone) {
      const newSprinkler: Sprinkler = {
        ...this.addSprinklerForm.value,
        connectionDate: new Date().toISOString().split('T')[0], // Fecha actual
        state: true, // Estado predeterminado
        zoneId: this.selectedZone.id
      };

      // Llamar al servicio para agregar el aspersor
      this.sprinklersService.createSprinkler(newSprinkler).subscribe({
        next: () => {
          this.snackBar.open('¡Aspersor agregado exitosamente!', 'Cerrar', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.showSprinklerForm = false;
        },
        error: () => {
          this.snackBar.open('Error al agregar el aspersor. Inténtelo nuevamente.', 'Cerrar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }

  addSensor(): void {
    if (this.addSensorForm.valid && this.selectedZone) {
      const newSensor: Sensor = {
        ...this.addSensorForm.value,
        currentData: 0, // Valor inicial para currentData
        zoneId: this.selectedZone.id
      };

      // Llamar al servicio para agregar el sensor
      this.sensorService.createSensor(newSensor).subscribe({
        next: () => {
          this.snackBar.open('¡Sensor agregado exitosamente!', 'Cerrar', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.showSensorForm = false;
        },
        error: () => {
          this.snackBar.open('Error al agregar el sensor. Inténtelo nuevamente.', 'Cerrar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }


}
