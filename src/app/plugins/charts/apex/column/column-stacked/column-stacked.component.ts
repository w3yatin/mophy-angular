import { Component } from '@angular/core';

@Component({
  selector: 'app-column-stacked',
  templateUrl: './column-stacked.component.html',
  styleUrls: ['./column-stacked.component.css']
})
export class ColumnStackedComponent {
  chartOptions = {  
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43]
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27]
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14]
      },
      {
        name: "PRODUCT D",
        data: [21, 7, 25, 13, 22, 8]
      }
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    colors:["var(--primary)", "#ff5c00", "#febb3b", "#ff6077"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      type: "category",
      categories: [
        "01/2011",
        "02/2011",
        "03/2011",
        "04/2011",
        "05/2011",
        "06/2011"
      ]
    },
    legend: {
      show:false,
      position: "right",
      offsetY: 40
    },
    fill: {
      opacity: 1
    }
  }
}
