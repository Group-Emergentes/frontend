import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';
import { Zone } from "../../../zone/models/Zone";
import { ZoneService } from "../../../zone/services/zone/zone.service";
import { DecimalPipe } from "@angular/common";
import { WebSocketSensorData } from "../../../../shared/services/websocket/web-socket-sensor-data";
import { WebSocketData } from "../../../../shared/model/WebSocketData";
import { Subscription } from "rxjs";

Chart.register(...registerables);

interface SoilMoistureData {
  averages: {
    lastYear: number;
    last90Days: number;
    last30Days: number;
  };
  last30Records: Array<{
    date: string;
    value: number;
  }>;
}

@Component({
  selector: 'app-soil-moisture-graph',
  standalone: true,
  templateUrl: './soil-moisture.component.html',
  imports: [
    DecimalPipe
  ],
  styleUrls: ['./soil-moisture.component.css']
})
export class SoilMoistureComponent implements OnInit, AfterViewInit {
  @Input() zones: Zone[] = [];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  messageSubscription!: Subscription;
  webSocketData!: WebSocketData;
  soilMoistureReport!: SoilMoistureData;
  chart!: Chart;

  constructor(
    private _zoneService: ZoneService,
    private _webSocketSensorData: WebSocketSensorData,
  ) {}

  ngOnInit(): void {
    this.getSoilMoistureReport();
  }

  ngAfterViewInit(): void {
    const interval = setInterval(() => {
      if (this.soilMoistureReport && this.chartCanvas) {
        this.createChart();
        clearInterval(interval);
        this.webSocketConnection();
      }
    }, 100);
  }

  getSoilMoistureReport(): void {
    this._zoneService.getSoilMoistureReport(1).subscribe((response: any) => {
      this.soilMoistureReport = response.data;
      if (this.chartCanvas) {
        this.createChart();
      }
    });
  }

  webSocketConnection() {
    this.messageSubscription = this._webSocketSensorData.messages$.subscribe({
      next: (message) => {
        this.webSocketData = message;
        if (this.webSocketData && this.webSocketData.sensorData) {
          this.updateChartData(this.webSocketData.sensorData);
        }
      },
      error: (error) => console.error("Error al recibir mensaje:", error)
    });
  }

  private updateChartData(sensorData: Array<{ sensorId: string; value: number }>): void {
    const moistureData = sensorData
      .filter(sensor => sensor.sensorId.startsWith('Hsensor'))
      .map(sensor => sensor.value);

    if (this.chart && moistureData.length) {
      const averageMoisture = moistureData.reduce((acc, value) => acc + value, 0) / moistureData.length;

      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      this.chart.data.labels!.push(currentTime);
      this.chart.data.datasets[0].data.push(averageMoisture);

      if (this.chart.data.labels!.length > 30) {
        this.chart.data.labels = this.chart.data.labels!.slice(-30);
        this.chart.data.datasets[0].data = this.chart.data.datasets[0].data.slice(-30);
      }

      this.chart.update('resize');
    }
  }

  private createChart(): void {
    if (this.chart) {
      return;
    }

    const data = this.getChartData();
    const config = this.getChartConfig(data);
    this.chart = new Chart(this.chartCanvas.nativeElement, config);
  }

  private getChartData(): ChartData<'line'> {
    const labels = this.soilMoistureReport.last30Records.map((entry) =>
      new Date(entry.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
    const moistureData = this.soilMoistureReport.last30Records.map((entry) => entry.value);

    return {
      labels: labels,
      datasets: [
        {
          label: 'Soil Moisture Last 30 Records',
          data: moistureData,
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
        },
      ]
    };
  }

  private getChartConfig(data: ChartData<'line'>): ChartConfiguration<'line'> {
    return {
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
            text: 'Soil Moisture Over the Last 30 Days'
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
              text: 'Moisture Value'
            },
            min: 20,
            max: 50,
            ticks: {
              stepSize: 10
            }
          }
        }
      }
    };
  }
}
