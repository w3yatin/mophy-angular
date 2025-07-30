import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-draw-time-chart',
  templateUrl: './line-draw-time-chart.component.html',
  styleUrls: ['./line-draw-time-chart.component.css']
})
export class LineDrawTimeChartComponent {

  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, -59, 80, -81, 56, 55, -40, -54, 60, 25],
          borderColor: '#1eaae7',
          backgroundColor: '#8fc7df',
          fill: true
        },
        {
          label: 'Dataset 2',
          data: [35, 50, -55, 81, -56, -55, 40, 56, -35, -70],
          borderColor: '#ff5c00',
          backgroundColor: '#ffa675',
          fill: true
        }
      ]
    },
    options: {
      plugins: {
        filler: {
          propagate: false,
        },
        title: {
          display: true,
          text: (ctx:any) => 'drawTime: ' + ctx.chart.options.plugins.filler.drawTime
        }
      },
      pointBackgroundColor: '#fff',
      radius: 10,
      interaction: {
        intersect: false,
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('lineDrewChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}


