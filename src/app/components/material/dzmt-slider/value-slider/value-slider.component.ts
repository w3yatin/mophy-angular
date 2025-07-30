import { Component } from '@angular/core';

@Component({
  selector: 'app-value-slider',
  templateUrl: './value-slider.component.html',
  styleUrls: ['./value-slider.component.css']
})
export class ValueSliderComponent {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = true;
  thumbLabel = false;
  value1 = 20;
  value2 = 60;
}
