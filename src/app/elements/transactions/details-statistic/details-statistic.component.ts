import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-details-statistic',
  templateUrl: './details-statistic.component.html',
  styleUrls: ['./details-statistic.component.css']
})
export class DetailsStatisticComponent {


  pie_statistic = {
    series: [85],
    chart: {
      height: 300,
      type: 'radialBar',
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '30%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#E5E5E5',
          strokeWidth: '45%',
          margin: 0, // margin is in pixels
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: false,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            offsetY: 10,
            color: '#111',
            fontSize: '24px',
            show: true,
          }
        }
      }
    }
  };

  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "My First dataset",
          data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35],
          borderColor: "#1EAAE7",
          borderWidth: "0",
          backgroundColor: "#51c7fa",
          hoverBackgroundColor: "#239cf8"
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
          ticks: {
            beginAtZero: true,
            display: false,
            stepSize: 10
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        },
        x: {
          display: false,
          barPercentage: 0.4,
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
    new Chart('statisticChartjs', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
