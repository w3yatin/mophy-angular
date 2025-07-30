import { Component } from '@angular/core';

@Component({
  selector: 'app-column-range',
  templateUrl: './column-range.component.html',
  styleUrls: ['./column-range.component.css']
})
export class ColumnRangeComponent {
  chartOptions = {  
    series: [
      {
        name: "blue",
        data: [
          {
            x: "Team A",
            y: [1, 5]
          },
          {
            x: "Team B",
            y: [4, 6]
          },
          {
            x: "Team C",
            y: [5, 8]
          },
          {
            x: "Team D",
            y: [3, 11]
          }
        ]
      },
      {
        name: "green",
        data: [
          {
            x: "Team A",
            y: [2, 6]
          },
          {
            x: "Team B",
            y: [1, 3]
          },
          {
            x: "Team C",
            y: [7, 8]
          },
          {
            x: "Team D",
            y: [5, 9]
          }
        ]
      }
    ],
    colors:["var(--primary)", "#ff5c00"],
    chart: {
      type: "rangeBar",
      height: 350,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    dataLabels: {
      enabled: true
    }
  }
}
