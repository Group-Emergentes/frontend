import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartDataset, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-historical-humidity-graph',
  standalone: true,
  imports: [],
  templateUrl: './historical-humidity-graph.component.html',
  styleUrls: ['./historical-humidity-graph.component.css']
})
export class HistoricalHumidityGraphComponent implements AfterViewInit {

  @ViewChild('myChart') myChartRef: any;
  chart: any;

  data: ChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: this.generateRandomNumbers(12, -100, 100),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15
      }
    ]
  };

  config: ChartConfiguration = {
    type: 'line' as ChartType,
    data: this.data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'History of water consumption.',
        }
      }
    }
  };

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart(this.myChartRef.nativeElement, this.config);
  }

  generateRandomNumbers(count: number, min: number, max: number): number[] {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1) + min));
  }
}
