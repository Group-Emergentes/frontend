import {Component } from '@angular/core';
import {CardDashboardComponent} from "../../components/card-dashboard/card-dashboard.component";
import {BaseChartDirective} from "ng2-charts";
import {
  HistoricalHumidityGraphComponent
} from "../../components/historical-humidity-graph/historical-humidity-graph.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CardDashboardComponent,
    BaseChartDirective,
    HistoricalHumidityGraphComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {



}
