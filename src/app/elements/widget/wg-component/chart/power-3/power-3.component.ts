import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-power-3',
  templateUrl: './power-3.component.html',
  styleUrls: ['./power-3.component.css']
})
export class Power3Component {

  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
          borderColor: "#2f4cdd",
          borderWidth: "0",
          backgroundColor: '#2f4cdd',
          hoverBackgroundColor: '#2f4cdd',
          barThickness: 5,
        }
      ]
    },
    options: {
      plugins: {
        legend: false,

      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
          ticks: {
            beginAtZero: true,
            display: false,

          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        },
        x: {
          display: false,
          barPercentage: 0.1,
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chart_widget_2', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
