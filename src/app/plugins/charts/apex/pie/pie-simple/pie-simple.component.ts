import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-simple',
  templateUrl: './pie-simple.component.html',
  styleUrls: ['./pie-simple.component.css']
})
export class PieSimpleComponent {
  chartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 400,
      type: "pie"
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
            position: "bottom"
          }
        }
      }
    ]
  };
}
