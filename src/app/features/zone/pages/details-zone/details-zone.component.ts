import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {Zone} from "../../models/Zone";
import {Sensor} from "../../models/Sensor";
import {Sprinkler} from "../../models/Sprinkler";
import {ZoneService} from "../../services/zone/zone.service";
import {SensorService} from "../../services/sensor/sensor.service";
import {SprinklerService} from "../../services/sprinkler/sprinkler.service";
import {WebSocketSensorData} from "../../../../shared/services/websocket/web-socket-sensor-data";
import {Subscription} from "rxjs";
import {WebSocketData} from "../../../../shared/model/WebSocketData";

@Component({
  selector: 'app-details-zone',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    DatePipe
  ],
  templateUrl: './details-zone.component.html',
  styleUrl: './details-zone.component.css'
})
export class DetailsZoneComponent implements OnInit, OnDestroy {

  private messageSubscription!: Subscription;
  webSocketData!: WebSocketData ;

  zones:Zone[] = []
  sensors:Sensor[]=[]
  sprinklers:Sprinkler[]=[]

  constructor(
    private _zoneService:ZoneService,
    private _sensorService:SensorService,
    private _sprinklerService:SprinklerService,
    private _webSocketSensorData: WebSocketSensorData,
  ) {

  }
  ngOnInit(): void {
    this.getZones();
    this.getSensors();
    this.getSprinklers();
    this.webSocketConnection();
  }
  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  getZones(){
    this._zoneService.getZonesByClient('1').subscribe((response:any)=>{
      this.zones = response.data;
    })
  }
  getSensors(){
    this._sensorService.getSensorsByZoneId('1').subscribe((response:any)=>{
      this.sensors = response.data;
    })
  }
  getSprinklers(){
    this._sprinklerService.getSprinklersByZoneId(1).subscribe((response:any)=>{
      this.sprinklers = response.data;
    })
  }

  activeAllSprinklers() {
    this._sprinklerService.activeAllSprinklers().subscribe((response: any) => {
      if(response.success){
        for (let sprinkler of this.sprinklers) {
          sprinkler.active = true;
        }
        console.log("activated sprinklers");
      }
    });
  }
  disableAllSprinklers(){
    this._sprinklerService.disableAllSprinklers().subscribe((response:any)=>{
      if(response.success){
        for (let sprinkler of this.sprinklers) {
          sprinkler.active = false;
        }
        console.log("disabled sprinklers");
      }
    })
  }

  webSocketConnection(){
    this.messageSubscription = this._webSocketSensorData.messages$.subscribe({
      next: (message) => {
        this.webSocketData = message;
        this.updateSensorData();
      },
      error: (error) => console.error("Error al recibir mensaje:", error)
    });
  }

  updateSensorData() {
    if (this.webSocketData && this.webSocketData.sensorData) {
      const sensorDataArray = this.webSocketData.sensorData;

      for (const sensorData of sensorDataArray) {
        const sensorToUpdate = this.sensors.find(sensor => sensor.sensorId === sensorData.sensorId);
        if (sensorToUpdate) {
          sensorToUpdate.value = sensorData.value;
        }
      }
    }
  }


}
