import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chartjs',
  templateUrl: './bar-chartjs.component.html',
  styleUrls: ['./bar-chartjs.component.css']
})
export class BarChartjsComponent {
  contantHead = {
    title: 'Bar chart',
    title_path: 'Chart-js' ,  
  }
}
