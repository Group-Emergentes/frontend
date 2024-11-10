import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ZoneService} from "../../services/zone/zone.service";
import {SensorService} from "../../services/sensor/sensor.service";
import {SprinklerService} from "../../services/sprinkler.service";
import {DetailsZoneComponent} from "../details-zone/details-zone.component";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {Zone} from "../../models/Zone";
import {Sensor} from "../../models/Sensor";
import {CreateSensor} from "../../models/CreateSensor";

@Component({
  selector: 'app-irrigation-zone',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DetailsZoneComponent,
    RouterLink,
    MatIcon,
    FormsModule,
  ],
  templateUrl: './irrigation-zone.component.html',
  styleUrl: './irrigation-zone.component.css',
  providers: [ZoneService,SensorService, SprinklerService]
})
export class IrrigationZoneComponent  implements OnInit {

  isEditingZone = false;
  zones:Zone[] = []
  sensors:Sensor[]=[]

  createSensor:CreateSensor = new CreateSensor();

  constructor(
    private _zoneService:ZoneService,
    private _sensorService:SensorService,
  ) {

  }

  ngOnInit(): void {
    this.getZones();
    this.getSensors();
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

  addSensor(){
    if(this.createSensor.sensorId !== "" && this.createSensor.type !== ""){
      this.createSensor.zoneId = 1;
      this._sensorService.create(this.createSensor).subscribe((response:any)=>{
        this.sensors.push(response.data);
      })
    }
  }



  toggleEditingZone(){
    this.isEditingZone = !this.isEditingZone;
  }

}
