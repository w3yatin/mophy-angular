import { Component } from '@angular/core';

@Component({
  selector: 'app-radialbar-multiple',
  templateUrl: './radialbar-multiple.component.html',
  styleUrls: ['./radialbar-multiple.component.css']
})
export class RadialbarMultipleComponent {
  chartOptions = {
    series: [44, 55, 67, 83],
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px"
          },
          value: {
            fontSize: "16px"
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w:any) {
              return "249";
            }
          }
        }
      }
    },
    colors:["var(--primary)", "#ff5c00", "#febb3b", "#ff6077", "#8b75d7"],
    labels: ["Apples", "Oranges", "Bananas", "Berries"]
  };
}
