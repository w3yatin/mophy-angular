import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-reversed',
  templateUrl: './bar-reversed.component.html',
  styleUrls: ['./bar-reversed.component.css']
})
export class BarReversedComponent {
  chartOptions = {
    series: [
      {
        name: "reversed",
        data: [400, 430, 448, 470, 540, 580, 690]
      }
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false
      }
    },
    colors:["var(--primary)"],
    annotations: {
      xaxis: [
        {
          x: 500,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396"
            },
            text: "X annotation"
          }
        }
      ],
      yaxis: [
        {
          y: "July",
          y2: "September",
          label: {
            text: "Y annotation"
          }
        }
      ]
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      reversed: true,
      axisTicks: {
        show: true
      }
    }
  };
}
