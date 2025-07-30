import { Component } from '@angular/core';

@Component({
  selector: 'app-treemap-basic',
  templateUrl: './treemap-basic.component.html',
  styleUrls: ['./treemap-basic.component.css']
})
export class TreemapBasicComponent {
  chartOptions = {
    series: [
      {
        data: [
          {
            x: "New Delhi",
            y: 218
          },
          {
            x: "Kolkata",
            y: 149
          },
          {
            x: "Mumbai",
            y: 184
          },
          {
            x: "Ahmedabad",
            y: 55
          },
          {
            x: "Bangaluru",
            y: 84
          },
          {
            x: "Pune",
            y: 31
          },
          {
            x: "Chennai",
            y: 70
          },
          {
            x: "Jaipur",
            y: 30
          },
          {
            x: "Surat",
            y: 44
          },
          {
            x: "Hyderabad",
            y: 68
          },
          {
            x: "Lucknow",
            y: 28
          },
          {
            x: "Indore",
            y: 19
          },
          {
            x: "Kanpur",
            y: 29
          }
        ]
      }
    ],

    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false
      }
    },
    colors:["#1eaae7"],
  };
}
