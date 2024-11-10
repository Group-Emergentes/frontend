import {Component, AfterViewInit, ElementRef, ViewChild, Input} from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions, registerables } from 'chart.js';
import {Zone} from "../../../zone/models/Zone";

Chart.register(...registerables);

let irrigationFrequency = {
  "water_consumed": {
    "last_year": 12000,
    "last_90_days": 3500,
    "last_30_days": 1200
  },
  "last_30_days_graph": [
    {"date": "2024-09-28", "volume_consumed": 30},
    {"date": "2024-09-29", "volume_consumed": 35},
    {"date": "2024-09-30", "volume_consumed": 28},
    {"date": "2024-10-01", "volume_consumed": 40},
    {"date": "2024-10-02", "volume_consumed": 50},
    {"date": "2024-10-03", "volume_consumed": 32},
    {"date": "2024-10-04", "volume_consumed": 29},
    {"date": "2024-10-05", "volume_consumed": 37},
    {"date": "2024-10-06", "volume_consumed": 34},
    {"date": "2024-10-07", "volume_consumed": 41},
    {"date": "2024-10-08", "volume_consumed": 38},
    {"date": "2024-10-09", "volume_consumed": 36},
    {"date": "2024-10-10", "volume_consumed": 42},
    {"date": "2024-10-11", "volume_consumed": 48},
    {"date": "2024-10-12", "volume_consumed": 45},
    {"date": "2024-10-13", "volume_consumed": 39},
    {"date": "2024-10-14", "volume_consumed": 44},
    {"date": "2024-10-15", "volume_consumed": 50},
    {"date": "2024-10-16", "volume_consumed": 52},
    {"date": "2024-10-17", "volume_consumed": 54},
    {"date": "2024-10-18", "volume_consumed": 48},
    {"date": "2024-10-19", "volume_consumed": 46},
    {"date": "2024-10-20", "volume_consumed": 55},
    {"date": "2024-10-21", "volume_consumed": 58},
    {"date": "2024-10-22", "volume_consumed": 60},
    {"date": "2024-10-23", "volume_consumed": 62},
    {"date": "2024-10-24", "volume_consumed": 63},
    {"date": "2024-10-25", "volume_consumed": 65},
    {"date": "2024-10-26", "volume_consumed": 68},
    {"date": "2024-10-27", "volume_consumed": 70},
    {"date": "2024-10-28", "volume_consumed": 72},
    {"date": "2024-10-29", "volume_consumed": 74},
    {"date": "2024-10-30", "volume_consumed": 76},
    {"date": "2024-10-31", "volume_consumed": 78},
    {"date": "2024-11-01", "volume_consumed": 80},
    {"date": "2024-11-02", "volume_consumed": 82},
    {"date": "2024-11-03", "volume_consumed": 85},
    {"date": "2024-11-04", "volume_consumed": 87}
  ]
}

@Component({
  selector: 'app-irrigation-frequency',
  standalone: true,
  imports: [],
  templateUrl: './irrigation-frequency.component.html',
  styleUrls: ['./irrigation-frequency.component.css']
})
export class IrrigationFrequencyComponent implements AfterViewInit {

  @Input() zones:Zone[]=[];

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit() {

    const labels = irrigationFrequency.last_30_days_graph.map(entry => entry.date);
    const moistureData = irrigationFrequency.last_30_days_graph.map(entry => entry.volume_consumed);

    const data: ChartData<'line'> = {

      labels: labels,
      datasets: [
        {
          label: 'Soil moisture last 30 days',
          data: moistureData,
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
        },
      ]
    };

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        },
        hover: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Volume'
            },
            min: 0,
            max: 100,
            ticks: {
              stepSize: 50
            }
          }
        }
      }
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, config);
  }

  protected readonly irrigationFrequency = irrigationFrequency;
}
