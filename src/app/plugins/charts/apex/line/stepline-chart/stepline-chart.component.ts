import { Component } from '@angular/core';

@Component({
  selector: 'app-stepline-chart',
  templateUrl: './stepline-chart.component.html',
  styleUrls: ['./stepline-chart.component.css']
})
export class SteplineChartComponent {
  chartOptions = {
    series: [
      {
        name: "stepline-series",
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
      }
    ],

    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "stepline"
    },
    colors: ['var(--primary)'],
    dataLabels: {
      enabled: false
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    }
  }
}
