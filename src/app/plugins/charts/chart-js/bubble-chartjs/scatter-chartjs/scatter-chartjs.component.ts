import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-scatter-chartjs',
  templateUrl: './scatter-chartjs.component.html',
  styleUrls: ['./scatter-chartjs.component.css']
})
export class ScatterChartjsComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'scatter',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [{
            x: 50,
            y: 0,
            r: 10
          }, {
            x: 20,
            y: 30,
            r: 16
          }, {
            x: 60,
            y: 60,
            r: 25
          }, {
            x: 70,
            y: 80,
            r: 30
          }, {
            x: 30,
            y: 30,
            r: 23
          }, {
            x: 10,
            y: 100,
            r: 5
          }
          ],
          borderColor: '#1eaae7',
          backgroundColor: '#1eaae7',
        },
        {
          label: 'Dataset 2',
          data: [{
            x: 60,
            y: 20,
            r: 10
          }, {
            x: 80,
            y: 30,
            r: 16
          }, {
            x: 70,
            y: 30,
            r: 25
          }, {
            x: 80,
            y: 30,
            r: 30
          }, {
            x: 90,
            y: 30,
            r: 23
          }, {
            x: 52,
            y: 60,
            r: 5
          }],
          borderColor: '#d74878',
          backgroundColor: '#d74878',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('stackedBubbleChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
