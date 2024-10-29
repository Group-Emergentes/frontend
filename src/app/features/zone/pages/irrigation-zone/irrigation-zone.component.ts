import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ZoneService} from "../../services/zone.service";
import {Zone} from "../../models/Zone";

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
  providers: [ZoneService]
})
export class IrrigationZoneComponent implements OnInit {
  zones: Zone[] = [];

  constructor(private zoneService: ZoneService) {}

  ngOnInit(): void {
    this.zoneService.getZones().subscribe((data: Zone[]) => {
      this.zones = data;
    });
  }
}
