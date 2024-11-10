import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ZoneService} from "../../services/zone/zone.service";
import {SensorService} from "../../services/sensor/sensor.service";
import {SprinklerService} from "../../services/sprinkler/sprinkler.service";
import {DetailsZoneComponent} from "../details-zone/details-zone.component";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {Zone} from "../../models/Zone";
import {Sensor} from "../../models/Sensor";
import {CreateSensor} from "../../models/CreateSensor";
import {Sprinkler} from "../../models/Sprinkler";
import {CreateSprinkler} from "../../models/SprinklerDto";

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
  sprinklers:Sprinkler[]=[]

  createSensor:CreateSensor = new CreateSensor();
  createSprinkler:CreateSprinkler = new CreateSprinkler();

  constructor(
    private _zoneService:ZoneService,
    private _sensorService:SensorService,
    private _sprinklerService:SprinklerService,
  ) {

  }

  ngOnInit(): void {
    this.getZones();
    this.getSensors();
    this.getSprinklers();
  }

  toggleEditingZone(){
    this.isEditingZone = !this.isEditingZone;
  }

  getZones(){
    this._zoneService.getZonesByClient('1').subscribe((response:any)=>{
      this.zones = response.data;
    })
  }
  getSensors(){
    this._sensorService.getSensorsByZoneId('1').subscribe((response:any)=>{
      this.sensors = response.data;
      console.log(this.sensors)
    })
  }
  getSprinklers(){
    this._sprinklerService.getSprinklersByZoneId(1).subscribe((response:any)=>{
      this.sprinklers = response.data;
      console.log(this.sprinklers)
    })
  }

  addSensor(){
    this.createSensor.zoneId = 1;
    if(this.createSensor.isValid()){
      this._sensorService.create(this.createSensor).subscribe((response:any)=>{
        this.sensors.push(response.data);
        this.createSensor =new CreateSensor();
      })
    }
  }
  addSprinkler(){
    this.createSprinkler.zoneId = 1;
    if(this.createSprinkler.isValid()){
      this._sprinklerService.create(this.createSprinkler).subscribe((response:any)=>{
        this.sprinklers.push(response.data);
        this.createSprinkler = new CreateSprinkler();
      })
    }
  }


}
