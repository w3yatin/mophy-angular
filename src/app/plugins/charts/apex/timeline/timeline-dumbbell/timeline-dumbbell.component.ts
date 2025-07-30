import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-dumbbell',
  templateUrl: './timeline-dumbbell.component.html',
  styleUrls: ['./timeline-dumbbell.component.css']
})
export class TimelineDumbbellComponent {
  chartOptions = {
    series: [
      {
        data: [
          {
            x: 'Operations',
            y: [2800, 4500]
          },
          {
            x: 'Customer Success',
            y: [3200, 4100]
          },
          {
            x: 'Engineering',
            y: [2950, 7800]
          },
          {
            x: 'Marketing',
            y: [3000, 4600]
          },
          {
            x: 'Product',
            y: [3500, 4100]
          },
          {
            x: 'Data Science',
            y: [4500, 6500]
          },
          {
            x: 'Sales',
            y: [4100, 5600]
          }
        ]
      }
    ],
    chart: {
      height: 390,
      type: 'rangeBar',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors:["var(--primary)", "#ff5c00"],
    plotOptions: {
      bar: {
        horizontal: true,
        isDumbbell: true,
        dumbbellColors: [['#EC7D31', '#36BDCB']]
      }
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: 'top',
      horizontalAlign: 'left',
      customLegendItems: ['Female', 'Male']
    },
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: ['#36BDCB'],
        inverseColors: false,
        stops: [0, 100]
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    }
  };
}
