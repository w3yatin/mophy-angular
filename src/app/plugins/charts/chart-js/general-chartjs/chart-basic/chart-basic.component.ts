import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-basic',
  templateUrl: './chart-basic.component.html',
  styleUrls: ['./chart-basic.component.css']
})
export class ChartBasicComponent {

  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderWidth: "0",
          barPercentage: 0.5,
          backgroundColor: '#1eaae7'
        }
      ]
    },
    options: {
      plugins: {
        legend: false,
      },
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            color: "#b3b3b3",

          },

        },
        x: {
          barPercentage: 0.5,
          ticks: {
            color: "#b3b3b3",

          }
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chartOptions', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
