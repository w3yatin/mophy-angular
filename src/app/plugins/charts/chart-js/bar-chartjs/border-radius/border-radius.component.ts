import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-border-radius',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.css']
})
export class BorderRadiusComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Fully Rounded',
          data: [65, -59, 80, 81, -56, -55, 40, 56, -35, -70],
          borderColor: '#1eaae7',
          backgroundColor: '#6acbf4d9',
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
        },
        {
          label: 'Small Radius',
          data: [65, -59, 80, -81, 56, 55, -40, -54, 60, 25],
          borderColor: '#ff5c00',
          backgroundColor: '#ffa675',
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
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
    new Chart('chartOptions1', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
