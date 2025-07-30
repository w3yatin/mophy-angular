import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  chartjs_bar = {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"],
      datasets: [{
        label: "Sales Stats",
        backgroundColor: ['rgba(234, 73, 137, 0)'],
        borderColor: '#1EAAE7',
        pointBackgroundColor: '#1EAAE7',
        pointBorderColor: '#1EAAE7',
        borderWidth: 4,
        borderRadius: 10,
        pointHoverBackgroundColor: '#1EAAE7',
        pointHoverBorderColor: '#1EAAE7',
        tension: 0.5,

        data: [12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17]
      }]
    },
    options: {
      title: {
        display: !1
      },


      plugins: {
        legend: false,
        tooltip: {
          intersect: !1,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },

      },
      responsive: !0,
      maintainAspectRatio: !1,
      hover: {
        mode: "index"
      },
      scales: {
        x: {
          display: !1,
          gridLines: !1,
          scaleLabel: {
            display: !0,
            labelString: "Month"
          }
        },
        y: {
          display: !1,
          gridLines: !1,
          scaleLabel: {
            display: !0,
            labelString: "Value"
          },
          ticks: {
            beginAtZero: !0
          }
        }
      },
      elements: {
        point: {
          radius: 0,
          borderWidth: 0
        }
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 5,
          bottom: 20
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('incomeChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
