import { Component } from '@angular/core';

@Component({
  selector: 'app-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.css']
})
export class CardStatisticComponent {
  pie_chart_data = {
    series: [34, 12, 41, 22, 15],
    chart: {
      type: 'donut',

    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0,
    },
    colors: ['#1EAAE7', '#6418C3', '#2BC155', '#FF7A30', '#FFEF5F'],
    legend: {
      position: 'bottom',
      show: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom',
          show: false
        }
      }
    }]
  };
}
