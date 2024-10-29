import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ZoneService} from "../../services/zone.service";
import {Zone} from "../../models/Zone";
import {Sensor} from "../../models/Sensor";
import {Sprinkler} from "../../models/Sprinkler";
import {SensorService} from "../../services/sensor.service";
import {SprinklerService} from "../../services/sprinkler.service";

@Component({
  selector: 'app-irrigation-zone',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './irrigation-zone.component.html',
  styleUrl: './irrigation-zone.component.css',
  providers: [ZoneService,SensorService, SprinklerService]
})
export class IrrigationZoneComponent  implements OnInit {
  zones: Zone[] = [];
  sensors: Sensor[] = [];
  sprinklers: Sprinkler[] = [];

  constructor(private zoneService: ZoneService,
              private sensorService: SensorService,
              private sprinklersService: SprinklerService,
  ) {}

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
}
