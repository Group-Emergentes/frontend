import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);

let soilMoistureData = {
  "averages": {
    "last_year": 35.6,
    "last_90_days": 40.2,
    "last_30_days": 42.8
  },
  "last_30_days_graph": [
    {"date": "2024-09-28", "moisture": 41.2},
    {"date": "2024-09-29", "moisture": 39.8},
    {"date": "2024-09-30", "moisture": 42.1},
    {"date": "2024-10-01", "moisture": 43.5},
    {"date": "2024-10-02", "moisture": 44.0},
    {"date": "2024-10-03", "moisture": 41.9},
    {"date": "2024-10-04", "moisture": 40.7},
    {"date": "2024-10-05", "moisture": 38.4},
    {"date": "2024-10-06", "moisture": 37.6},
    {"date": "2024-10-07", "moisture": 36.8},
    {"date": "2024-10-08", "moisture": 35.4},
    {"date": "2024-10-09", "moisture": 38.9},
    {"date": "2024-10-10", "moisture": 40.1},
    {"date": "2024-10-11", "moisture": 42.3},
    {"date": "2024-10-12", "moisture": 43.7},
    {"date": "2024-10-13", "moisture": 44.9},
    {"date": "2024-10-14", "moisture": 45.2},
    {"date": "2024-10-15", "moisture": 43.8},
    {"date": "2024-10-16", "moisture": 42.5},
    {"date": "2024-10-17", "moisture": 40.6},
    {"date": "2024-10-18", "moisture": 41.7},
    {"date": "2024-10-19", "moisture": 39.3},
    {"date": "2024-10-20", "moisture": 37.8},
    {"date": "2024-10-21", "moisture": 36.4},
    {"date": "2024-10-22", "moisture": 38.1},
    {"date": "2024-10-23", "moisture": 39.0},
    {"date": "2024-10-24", "moisture": 40.4},
    {"date": "2024-10-25", "moisture": 42.2},
    {"date": "2024-10-26", "moisture": 44.3},
    {"date": "2024-10-27", "moisture": 45.5},
    {"date": "2024-10-28", "moisture": 46.0},
    {"date": "2024-10-29", "moisture": 47.1},
    {"date": "2024-10-30", "moisture": 48.2},
    {"date": "2024-10-31", "moisture": 49.0},
    {"date": "2024-11-01", "moisture": 50.3},
    {"date": "2024-11-02", "moisture": 51.1},
    {"date": "2024-11-03", "moisture": 52.0},
    {"date": "2024-11-04", "moisture": 53.5}
  ]
}

@Component({
  selector: 'app-soil-moisture-graph',
  standalone: true,
  imports: [],
  templateUrl: './soil-moisture.component.html',
  styleUrls: ['./soil-moisture.component.css']
})
export class SoilMoistureComponent implements AfterViewInit {

  zones = ['Zone 1', 'Zone 2', 'Zone 3']


  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit() {
    const labels = soilMoistureData.last_30_days_graph.map(entry => entry.date);
    const moistureData = soilMoistureData.last_30_days_graph.map(entry => entry.moisture);

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
              text: 'Value'
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

  protected readonly soilMoistureData = soilMoistureData;
}
