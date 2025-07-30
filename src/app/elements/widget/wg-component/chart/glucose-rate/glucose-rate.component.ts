import { Component } from '@angular/core';

@Component({
  selector: 'app-glucose-rate',
  templateUrl: './glucose-rate.component.html',
  styleUrls: ['./glucose-rate.component.css']
})
export class GlucoseRateComponent {
  chartOptions = {
    series: [
      {
        name: "STOCK ABC",
        data: [7, 6, 8, 7, 3, 8, 4, 5, 6, 5, 2, 4, 3]
      }
    ],
    chart: {
      height: "100px",
      type: "area",
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },

    colors: ["#1eaae7"],

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 1,
    },

    tooltip: {
      enabled: false,
    },

    legend: {
      horizontalAlign: "left",
      show: false,
    },

    grid: {
      show: false,
    },

    labels: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
    ],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov"
      ]
    },
    yaxis: {
      opposite: false,
      show: false,
    },
    fill: {
      opacity: 1
    }
  }
}
