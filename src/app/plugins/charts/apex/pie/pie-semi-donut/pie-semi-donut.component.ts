import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-semi-donut',
  templateUrl: './pie-semi-donut.component.html',
  styleUrls: ['./pie-semi-donut.component.css']
})
export class PieSemiDonutComponent {

  chartOptions = {
  series: [44, 55, 41, 17, 15],
  chart: {
    width: 400,
    type: "donut"
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  colors:["var(--primary)", "#ff5c00", "#febb3b", "#ff6077", "#8b75d7"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: "bottom",
          show: true,
        },
        dataLabels: {
            enabled: false,
        },
      }
    }
  ],
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10
    }
  },
  grid: {
    padding: {
      bottom: -80
    }
  }
}
}
