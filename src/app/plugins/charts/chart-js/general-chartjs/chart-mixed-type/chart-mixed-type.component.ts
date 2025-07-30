import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-mixed-type',
  templateUrl: './chart-mixed-type.component.html',
  styleUrls: ['./chart-mixed-type.component.css']
})
export class ChartMixedTypeComponent {
  data:any = [];
  ngOnInit() {
    const labels = [
      'January',
      'February',
      'March',
      'April'
    ]
    this.data = {
      labels: labels,
      datasets: [{
        type: 'bar',
        label: 'Bar Dataset',
        data: [10, 20, 30, 40],
        borderColor: '#1eaae7',
        backgroundColor: 'rgba(14, 138, 116, 0.5)'
      }, {
        type: 'line',
        label: 'Line Dataset',
        data: [50, 50, 50, 50],
        fill: false,
        borderColor: 'rgba(255, 92, 0, 1)'
      }]
    };
    new Chart('mixed-chart', {
      type: 'scatter',
      data: this.data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
