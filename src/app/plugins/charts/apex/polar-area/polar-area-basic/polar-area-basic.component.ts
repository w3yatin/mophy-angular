import { Component } from '@angular/core';

@Component({
  selector: 'app-polar-area-basic',
  templateUrl: './polar-area-basic.component.html',
  styleUrls: ['./polar-area-basic.component.css']
})
export class PolarAreaBasicComponent {
  chartOptions = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      width: 400,
      type: "polarArea"
    },
    stroke: {
      colors: ["#fff"]
    },
    colors:["var(--primary)", "#ff5c00", "#febb3b", "#ff6077", "#8b75d7"],
    fill: {
      opacity: 0.8
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            show:false,
            position: "bottom"
          }
        }
      }
    ]
  };
}
