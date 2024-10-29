import { Component } from '@angular/core';
import {SoilMoistureComponent} from "../components/soil-moisture-graph/soil-moisture.component";
import {IrrigationFrequencyComponent} from "../components/irrigation-frequency/irrigation-frequency.component";

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
export class ReportsPageComponent {

}
