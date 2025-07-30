import { Component } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-delay-chart',
  templateUrl: './delay-chart.component.html',
  styleUrls: ['./delay-chart.component.css']
})
export class DelayChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [60, -59, 80, 81, -36, -55, 40, 56, -35, -70],
          backgroundColor: '#1eaae7',
        },
        {
          label: 'Dataset 2',
          data: [35, -50, 80, -85, 56, 50, -70, -50, 60, 25],
          backgroundColor: '#ff5c00',
        },
        {
          label: 'Dataset 3',
          data: [65, -59, 55, -81, 56, 59, -40, -54, 70, 35],
          backgroundColor: '#86c4b9',
        }
      ]
    },
    options: {
      animation: {
        onComplete: () => {
          const delayed = true;
        },
        delay: (context:any) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delay) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  }

  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('delayChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
