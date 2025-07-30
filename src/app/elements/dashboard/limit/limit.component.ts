import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.css']
})
export class LimitComponent {
  chartjs_bar = {
    type: 'line',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [40, 50, 40, 50, 40, 50, 40],
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: "1",
          backgroundColor: 'rgba(39,120,238,0.8)',
          tension: 0.3,
          fill: true,
          pointBackgroundColor: 'rgba(26, 51, 213, 0.5)'
        }, {
          label: "My First dataset",
          data: [50, 60, 50, 60, 50, 60, 50],
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: "1",
          backgroundColor: 'rgba(91,171,240,0.8)',
          tension: 0.3,
          fill: true,
          pointBackgroundColor: 'rgba(56, 164, 248, 1)'
        }, {
          label: "My First dataset",
          data: [60, 70, 60, 70, 60, 70, 60],
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: "1",
          backgroundColor: 'rgba(162,218,243,0.8)',
          tension: 0.3,
          fill: true,
          pointBackgroundColor: 'rgba(56, 164, 248, 1)'
        }

      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: false,

      },
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        y: {
          max: 100,
          min: 0,
          ticks: {
            stepSize: 20,
            beginAtZero: true,
            padding: 10
          },
          display: false,
        },
        x: {
          ticks: {
            padding: 5
          },
          display: false,
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('lineChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
