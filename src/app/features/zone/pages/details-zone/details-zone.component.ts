import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

let detailZone = {
  "zoneName": "Zona Norte",
  "sensors": [
    {
      "id": "sensor1",
      "name": "Sensor de Humedad 1",
      "data": 45,
      "type": "humidity"
    },
    {
      "id": "sensor2",
      "name": "Sensor de Temperatura 1",
      "data": 22,
      "type": "temperature"
    },
    {
      "id": "sensor3",
      "name": "Sensor de Humedad 2",
      "data": 47,
      "type": "humidity"
    },
    {
      "id": "sensor4",
      "name": "Sensor de Temperatura 2",
      "data": 24,
      "type": "temperature"
    },
    {
      "id": "sensor5",
      "name": "Sensor de Humedad 3",
      "data": 50,
      "type": "humidity"
    },
    {
      "id": "sensor6",
      "name": "Sensor de Temperatura 3",
      "data": 23,
      "type": "temperature"
    },
    {
      "id": "sensor7",
      "name": "Sensor de Humedad 4",
      "data": 42,
      "type": "humidity"
    },
    {
      "id": "sensor8",
      "name": "Sensor de Temperatura 4",
      "data": 25,
      "type": "temperature"
    }
  ],
  "sprinklers": [
    {
      "id": "sprinkler1",
      "lastConnection": "2024-11-01T10:00:00Z",
      "status": true
    },
    {
      "id": "sprinkler2",
      "lastConnection": "2024-11-01T11:00:00Z",
      "status": false
    },
    {
      "id": "sprinkler3",
      "lastConnection": "2024-11-01T12:30:00Z",
      "status": true
    },
    {
      "id": "sprinkler4",
      "lastConnection": "2024-11-01T14:15:00Z",
      "status": false
    },
    {
      "id": "sprinkler5",
      "lastConnection": "2024-11-01T09:45:00Z",
      "status": true
    },
    {
      "id": "sprinkler6",
      "lastConnection": "2024-11-01T08:30:00Z",
      "status": false
    },
    {
      "id": "sprinkler7",
      "lastConnection": "2024-11-01T15:20:00Z",
      "status": true
    },
    {
      "id": "sprinkler8",
      "lastConnection": "2024-11-01T16:00:00Z",
      "status": false
    }
  ]
}

@Component({
  selector: 'app-details-zone',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './details-zone.component.html',
  styleUrl: './details-zone.component.css'
})
export class DetailsZoneComponent implements OnInit{

  constructor() {

  }

  ngOnInit(): void {

  }

  protected readonly detailZone = detailZone;
}
