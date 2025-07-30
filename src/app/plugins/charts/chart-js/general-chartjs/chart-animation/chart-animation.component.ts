import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-animation',
  templateUrl: './chart-animation.component.html',
  styleUrls: ['./chart-animation.component.css']
})
export class ChartAnimationComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
  dataBar = {
    labels: this.labels,
    datasets: [
      {
        label: 'Looping tension',
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
      }
    ]
  };
  ngOnInit() {
    this.mychat();
  }

  mychat(){
    new Chart('animation-chart', {
      type: 'line',
      data: this.dataBar,
      options: {
        responsive: true,
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            min: 0,
            max: 100
          }
        }
      }
    });
  }
}
