import { Component } from '@angular/core';

@Component({
  selector: 'app-treemap-multiple-series',
  templateUrl: './treemap-multiple-series.component.html',
  styleUrls: ['./treemap-multiple-series.component.css']
})
export class TreemapMultipleSeriesComponent {
  chartOptions = {
    series: [
      {
        name: "Desktops",
        data: [
          {
            x: "ABC",
            y: 10
          },
          {
            x: "DEF",
            y: 60
          },
          {
            x: "XYZ",
            y: 41
          }
        ]
      },
      {
        name: "Mobile",
        data: [
          {
            x: "ABCD",
            y: 10
          },
          {
            x: "DEFG",
            y: 20
          },
          {
            x: "WXYZ",
            y: 51
          },
          {
            x: "PQR",
            y: 30
          },
          {
            x: "MNO",
            y: 20
          },
          {
            x: "CDE",
            y: 30
          }
        ]
      }
    ],

    legend: {
      show: false
    },
    colors:["#1eaae7", "#ff5c00"],
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false
      }
    },
  };
}
