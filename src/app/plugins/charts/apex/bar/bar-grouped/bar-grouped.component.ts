import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-grouped',
  templateUrl: './bar-grouped.component.html',
  styleUrls: ['./bar-grouped.component.css']
})
export class BarGroupedComponent {
  chartOptions = {
    series: [
      {
        name: "serie1",
        data: [44, 55, 41, 64, 22, 43, 21]
      },
      {
        name: "serie2",

        data: [53, 32, 33, 52, 13, 44, 32]
      }
    ],
    chart: {
      type: "bar",
      height: 430,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top"
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"]
      }
    }, 
    colors:["var(--primary)", "#ff5c00"],
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"]
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
    }
  };
}
