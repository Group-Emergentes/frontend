import {Component, OnInit} from '@angular/core';
import {CardDashboardComponent} from "../../components/card-dashboard/card-dashboard.component";
import {BaseChartDirective} from "ng2-charts";
import {
  DashboardGraphComponent
} from "../../components/dashboard-graph/dashboard-graph.component";

let water_use_last_30 = [
  {"date": "2024-11-01", "value": 15},
  {"date": "2024-11-02", "value": 12},
  {"date": "2024-11-03", "value": 19},
  {"date": "2024-11-04", "value": 17},
  {"date": "2024-11-05", "value": 14},
  {"date": "2024-11-06", "value": 20},
  {"date": "2024-11-07", "value": 13},
  {"date": "2024-11-08", "value": 16},
  {"date": "2024-11-09", "value": 18},
  {"date": "2024-11-10", "value": 11},
  {"date": "2024-11-11", "value": 15},
  {"date": "2024-11-12", "value": 14},
  {"date": "2024-11-13", "value": 10},
  {"date": "2024-11-14", "value": 19},
  {"date": "2024-11-15", "value": 16},
  {"date": "2024-11-16", "value": 12},
  {"date": "2024-11-17", "value": 18},
  {"date": "2024-11-18", "value": 13},
  {"date": "2024-11-19", "value": 11},
  {"date": "2024-11-20", "value": 20},
  {"date": "2024-11-21", "value": 15},
  {"date": "2024-11-22", "value": 17},
  {"date": "2024-11-23", "value": 14},
  {"date": "2024-11-24", "value": 16},
  {"date": "2024-11-25", "value": 19},
  {"date": "2024-11-26", "value": 12},
  {"date": "2024-11-27", "value": 10},
  {"date": "2024-11-28", "value": 18},
  {"date": "2024-11-29", "value": 14},
  {"date": "2024-11-30", "value": 17}
]
let temperature_history_last_30 = [
  {"date": "2024-11-01", "value": 15.4},
  {"date": "2024-11-02", "value": 12.8},
  {"date": "2024-11-03", "value": 19.3},
  {"date": "2024-11-04", "value": 17.1},
  {"date": "2024-11-05", "value": 14.6},
  {"date": "2024-11-06", "value": 20.0},
  {"date": "2024-11-07", "value": 13.5},
  {"date": "2024-11-08", "value": 16.9},
  {"date": "2024-11-09", "value": 18.2},
  {"date": "2024-11-10", "value": 11.7},
  {"date": "2024-11-11", "value": 15.0},
  {"date": "2024-11-12", "value": 14.3},
  {"date": "2024-11-13", "value": 10.9},
  {"date": "2024-11-14", "value": 19.7},
  {"date": "2024-11-15", "value": 16.8},
  {"date": "2024-11-16", "value": 12.2},
  {"date": "2024-11-17", "value": 18.6},
  {"date": "2024-11-18", "value": 13.1},
  {"date": "2024-11-19", "value": 11.4},
  {"date": "2024-11-20", "value": 20.0},
  {"date": "2024-11-21", "value": 15.5},
  {"date": "2024-11-22", "value": 17.2},
  {"date": "2024-11-23", "value": 14.9},
  {"date": "2024-11-24", "value": 16.3},
  {"date": "2024-11-25", "value": 19.1},
  {"date": "2024-11-26", "value": 12.5},
  {"date": "2024-11-27", "value": 10.6},
  {"date": "2024-11-28", "value": 18.4},
  {"date": "2024-11-29", "value": 14.7},
  {"date": "2024-11-30", "value": 17.9}
]


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CardDashboardComponent,
    BaseChartDirective,
    DashboardGraphComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  labels:string[] =[]
  datas:number[]=[]

  constructor() {

  }

  ngOnInit(): void {
    this.labels = water_use_last_30.map(item => item.date);
    this.datas = water_use_last_30.map(item => item.value);


  }


}
