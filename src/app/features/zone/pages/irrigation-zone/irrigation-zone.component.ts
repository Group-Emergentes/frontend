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
import {DetailsZoneComponent} from "../details-zone/details-zone.component";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";


let zones = [
  {
    "id": 1,
    "name": "Zona 1",
    "cropType": "Zanahorias",
    "widthLand": 100,
    "lengthLand": 200
  },
  {
    "id": 2,
    "name": "Zona 2",
    "cropType": "Lechugas",
    "widthLand": 454,
    "lengthLand": 5
  },
  {
    "id": 3,
    "name": "Zona 3",
    "cropType": "Lechugas",
    "widthLand": 454,
    "lengthLand": 5
  },
  {
    "id": 4,
    "name": "Zona 4",
    "cropType": "Lechugas",
    "widthLand": 454,
    "lengthLand": 5
  }
]
let sensors = [
  {
    "id": 1,
    "name": "temperatureSensor#2354",
    "sensorType": "Temperature",
    "minimum": 3,
    "maximum": 4,
    "currentData": 10,
    "zoneId": 1
  },
  {
    "id": 2,
    "name": "humiditySensor#4564",
    "sensorType": "Humidity",
    "minimum": 5,
    "maximum": 6,
    "currentData": 20,
    "zoneId": 1
  },
  {
    "id": 3,
    "name": "temperatureSensor#2354",
    "sensorType": "Temperature",
    "minimum": 3,
    "maximum": 4,
    "currentData": 10,
    "zoneId": 2
  },
  {
    "id": 4,
    "name": "humiditySensor#4564",
    "sensorType": "Humidity",
    "minimum": 5,
    "maximum": 6,
    "currentData": 20,
    "zoneId": 2
  },
  {
    "id": 5,
    "name": "humiditySensor#4564",
    "sensorType": "Humidity",
    "minimum": 5,
    "maximum": 6,
    "currentData": 20,
    "zoneId": 4
  },
  {
    "name": "Temperatura#345",
    "sensorType": "Temperature",
    "minimum": 45,
    "maximum": 4.5,
    "currentData": 0,
    "zoneId": 3,
    "id": 6
  }
]
let sprinklers = [
  {
    "id": 1,
    "name": "Sensor#2354",
    "state": true,
    "disconnectionDate": "",
    "zoneId": 1,
    "lastConnection":"2024-05-05"
  },
  {
    "id": 2,
    "name": "Sensor#4354",
    "state": false,
    "zoneId": 1,
    "lastConnection":"2024-05-05"
  },
  {
    "id": 3,
    "name": "Sensor#2354",
    "state": true,
    "disconnectionDate": "",
    "zoneId": 2,
    "lastConnection":"2024-05-05"
  },
  {
    "id": 4,
    "name": "Sensor#4354",
    "state": false,
    "zoneId": 2,
    "lastConnection":"2024-05-05"
  },
  {
    "id": 5,
    "name": "Sensor#2354",
    "state": true,
    "disconnectionDate": "",
    "zoneId": 1,
    "lastConnection":"2024-05-05"
  },
  {
    "id": 6,
    "name": "Sensor#2354",
    "state": true,
    "disconnectionDate": "",
    "zoneId": 1,
    "lastConnection":"2024-05-05"
  },
  {
    "id": 7,
    "name": "Sensor#2354",
    "state": true,
    "disconnectionDate": "",
    "zoneId": 1,
    "lastConnection":"2024-05-05"
  },
  {
    "id": 8,
    "name": "Sensor#2354",
    "state": true,
    "disconnectionDate": "",
    "zoneId": 1,
    "lastConnection":"2024-05-05"
  },
  {
    "name": "dfgb",
    "state": true,
    "zoneId": 1,
    "id": 9,
    "lastConnection":"2024-05-05"
  },
  {
    "name": "Aspersor#245",
    "state": true,
    "zoneId": 3,
    "id": 10,
    "lastConnection":"2024-05-05"
  },
  {
    "name": "Aspersor#2455",
    "state": true,
    "zoneId": 3,
    "id": 11,
    "lastConnection":"2024-05-05"
  },
  {
    "name": "Aspersor#6767",
    "state": true,
    "zoneId": 3,
    "id": 12,
    "lastConnection":"2024-05-05"
  }
]

@Component({
  selector: 'app-irrigation-zone',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DetailsZoneComponent,
    RouterLink,
    MatIcon,
  ],
  templateUrl: './irrigation-zone.component.html',
  styleUrl: './irrigation-zone.component.css',
  providers: [ZoneService,SensorService, SprinklerService]
})
export class IrrigationZoneComponent  implements OnInit {

  isEditingZone = false;

  constructor(
  ) {

  }

  ngOnInit(): void {

  }

  toggleEditingZone(){
    this.isEditingZone = !this.isEditingZone;
  }

  protected readonly zones = zones;
}
