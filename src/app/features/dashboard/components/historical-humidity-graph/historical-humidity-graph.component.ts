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
          text: 'Point Style: circle',
        }
      }
    }
  };

  actions = [
    { name: 'pointStyle: circle (default)', handler: () => this.updatePointStyle('circle') },
    { name: 'pointStyle: crossRot', handler: () => this.updatePointStyle('crossRot') },
    { name: 'pointStyle: dash', handler: () => this.updatePointStyle('dash') },
    { name: 'pointStyle: line', handler: () => this.updatePointStyle('line') },
    { name: 'pointStyle: rect', handler: () => this.updatePointStyle('rect') },
    { name: 'pointStyle: rectRounded', handler: () => this.updatePointStyle('rectRounded') },
    { name: 'pointStyle: rectRot', handler: () => this.updatePointStyle('rectRot') },
    { name: 'pointStyle: star', handler: () => this.updatePointStyle('star') },
    { name: 'pointStyle: triangle', handler: () => this.updatePointStyle('triangle') },
    { name: 'pointStyle: false', handler: () => this.updatePointStyle(false) },
  ];

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart(this.myChartRef.nativeElement, this.config);
  }

  updatePointStyle(style: 'circle' | 'cross' | 'crossRot' | 'dash' | 'line' | 'rect' | 'rectRounded' | 'rectRot' | 'star' | 'triangle' | false): void {
    this.chart.data.datasets.forEach((dataset: ChartDataset<'line'>) => {
      dataset.pointStyle = style;
    });
    this.chart.options.plugins!.title!.text = `Point Style: ${style}`;
    this.chart.update();
  }

  generateRandomNumbers(count: number, min: number, max: number): number[] {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1) + min));
  }
}
