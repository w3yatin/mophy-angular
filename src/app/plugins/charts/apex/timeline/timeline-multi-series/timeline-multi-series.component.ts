import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-multi-series',
  templateUrl: './timeline-multi-series.component.html',
  styleUrls: ['./timeline-multi-series.component.css']
})
export class TimelineMultiSeriesComponent {
  chartOptions = {
    series: [
      {
        name: "Bob",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-08").getTime()
            ]
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-11").getTime()
            ]
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-11").getTime(),
              new Date("2019-03-16").getTime()
            ]
          }
        ]
      },
      {
        name: "Joe",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-05").getTime()
            ]
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-06").getTime(),
              new Date("2019-03-09").getTime()
            ]
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-10").getTime(),
              new Date("2019-03-19").getTime()
            ]
          }
        ]
      }
    ],
    chart: {
      height: 350,
      type: "rangeBar",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    colors:["var(--primary)", "#ff5c00", "#febb3b"],
    dataLabels: {
      enabled: true,
      formatter: function(val:any) {
        var diff = 1
        return diff + (diff > 1 ? " days" : " day");
      }
    },
    xaxis: {
      type: "datetime"
    },
    legend: {
      position: "top"
    }
  };
}
