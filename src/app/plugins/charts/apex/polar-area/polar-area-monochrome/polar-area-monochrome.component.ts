import { Component } from '@angular/core';

@Component({
  selector: 'app-polar-area-monochrome',
  templateUrl: './polar-area-monochrome.component.html',
  styleUrls: ['./polar-area-monochrome.component.css']
})
export class PolarAreaMonochromeComponent {
  chartOptions = {
    series: [42, 39, 35, 29, 26],
      chart: {
        width: 400,
        type: 'polarArea'
      },
      labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1, 
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        show: false,
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          }
        }
      },
      colors:["var(--primary)", "#ff5c00", "#febb3b", "#ff6077", "#8b75d7"],
      theme: {
        monochrome: {
          //    enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
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
