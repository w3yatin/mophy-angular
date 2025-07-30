import { Component } from '@angular/core';

@Component({
  selector: 'app-radar-basic',
  templateUrl: './radar-basic.component.html',
  styleUrls: ['./radar-basic.component.css']
})
export class RadarBasicComponent {
  chartOptions = {
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20]
      }
    ],
    chart: {
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      }
    },
     colors:[ "#ff5c00"],
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"]
    }
  };
}
