import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-all-sales-1',
  templateUrl: './all-sales-1.component.html',
  styleUrls: ['./all-sales-1.component.css']
})
export class AllSales1Component {

  chartjs_bar = {
    type: 'line',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [55, 30, 90, 41, 86, 45, 80],
          borderColor: '#8bc740',
          borderWidth: "2",
          backgroundColor: 'transparent',
          pointBackgroundColor: '#8bc740',
          tension: 0.5,
          pointRadius: 0
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
          stepSize: 20,
          ticks: {
            beginAtZero: true,
            padding: 0,
            display: false,
          },
          gridLines: {
            drawBorder: false,
            display: false
          }
        },
        x: {
          display: false,
          ticks: {
            padding: 0,
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chart_widget_14', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
