import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stepped-chart',
  templateUrl: './stepped-chart.component.html',
  styleUrls: ['./stepped-chart.component.css']
})
export class SteppedChartComponent {
  labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6']
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset',
          data: [35, -59, 80, 32, 60, -55, -40],
          borderColor: '#1eaae7',
          fill: false,
          stepped: true,
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        axis: 'x'
      },
      plugins: {
        title: {
          display: true,
          text: (ctx: any) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('steppedChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
