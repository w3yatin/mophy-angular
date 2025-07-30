import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weekly-sales',
  templateUrl: './weekly-sales.component.html',
  styleUrls: ['./weekly-sales.component.css']
})
export class WeeklySalesComponent {


  chartjs_bar = {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: "Sales Stats",
        backgroundColor: "rgba(30, 170, 231, .5)",
        borderColor: '#1EAAE7',
        pointBackgroundColor: '#1EAAE7',
        pointBorderColor: '#1EAAE7',
        pointHoverBackgroundColor: '#1EAAE7',
        pointHoverBorderColor: '#1EAAE7',
        //barThickness:40,
        tension: 0.5,
        fill: true,
        data: [0, 18, 14, 24, 16, 30]
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
          xPadding: 5,
          yPadding: 5,
          caretPadding: 5
        }

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
          },
          ticks: {
            max: 30,
            min: 0
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
        line: {
          tension: .15
        },
        point: {
          radius: 2,
          borderWidth: 1
        }
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chart_widget_11', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
