import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-donut',
  templateUrl: './pie-donut.component.html',
  styleUrls: ['./pie-donut.component.css']
})
export class PieDonutComponent {

  chartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      type: "donut",
      width: 400,
    },
     colors:["var(--primary)", "#ff5c00", "#febb3b", "#ff6077", "#8b75d7"],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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
    ]
  }
}
