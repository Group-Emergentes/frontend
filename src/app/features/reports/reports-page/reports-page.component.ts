import {Component, OnInit} from '@angular/core';
import {SoilMoistureComponent} from "../components/soil-moisture-graph/soil-moisture.component";
import {IrrigationFrequencyComponent} from "../components/irrigation-frequency/irrigation-frequency.component";
import {Zone} from "../../zone/models/Zone";
import {ZoneService} from "../../zone/services/zone/zone.service";

@Component({
  selector: 'app-reports-page',
  standalone: true,
  imports: [
    SoilMoistureComponent,
    IrrigationFrequencyComponent

  ],
  templateUrl: './reports-page.component.html',
  styleUrl: './reports-page.component.css'
})
export class ReportsPageComponent implements OnInit{
  zones:Zone[]=[]

  constructor(private _zoneService: ZoneService,
              ) {
  }
  ngOnInit(): void {
    this.getAllZones()

  }

  getAllZones(){
    this._zoneService.getZonesByClient('1').subscribe((response)=>{
      this.zones = response.data;
    })
  }

}
