import { AfterViewInit, Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-graph',
  standalone: true,
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.css']
})
export class DashboardGraphComponent implements AfterViewInit, OnChanges {

  @Input() labelsGraph: string[] = [];
  @Input() dataGraph: number[] = [];

  @ViewChild('myChart') myChartRef: any;
  chart: any;

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart && (changes['dataGraph'] || changes['labelsGraph'])) {
      this.updateChart();
    }
  }

  createChart(): void {
    if (this.myChartRef) {
      this.chart = new Chart(this.myChartRef.nativeElement, {
        type: 'line' as ChartType,
        data: {
          labels: this.labelsGraph,
          datasets: [
            {
              label: 'Water Consumption',
              data: this.dataGraph,
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              pointStyle: 'circle',
              pointRadius: 5,
              pointHoverRadius: 7,
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'History of Water Consumption',
            }
          }
        }
      });
    }
  }

  updateChart(): void {
    if (this.chart) {
      this.chart.data.labels = this.labelsGraph;
      this.chart.data.datasets[0].data = this.dataGraph;
      this.chart.update();
    }
  }
}
