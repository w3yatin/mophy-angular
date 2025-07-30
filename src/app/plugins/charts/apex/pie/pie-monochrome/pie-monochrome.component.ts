import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-monochrome',
  templateUrl: './pie-monochrome.component.html',
  styleUrls: ['./pie-monochrome.component.css']
})
export class PieMonochromeComponent {
  chartOptions = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
      width: 400,
      type: "pie"
    },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    theme: {
      monochrome: {
        enabled: true
      }
    },
    title: {
      text: "Number of leads"
    },

    
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
