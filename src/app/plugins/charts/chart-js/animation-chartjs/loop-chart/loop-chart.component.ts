import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-loop-chart',
  templateUrl: './loop-chart.component.html',
  styleUrls: ['./loop-chart.component.css']
})
export class LoopChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, -59, 55, -81, 56, 59, -40, -54, 70, 35],
          borderColor: '#ff5c00',
          backgroundColor: '#ff5c00',
          tension: 0.4,
        },
        {
          label: 'Dataset 2',
          data: [20, -35, 30, -33, 50, 20, -55, 35, -20, 60],
          borderColor: '#1eaae7',
          backgroundColor: '#1eaae7',
        }
      ]
    },

    options: {
      animations: {
        radius: {
          duration: 400,
          easing: 'linear',
          loop: (context: any) => context.active
        }
      },
      hoverRadius: 12,
      hoverBackgroundColor: 'yellow',
      interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('loopChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
