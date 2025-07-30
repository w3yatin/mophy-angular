import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-panel-styling',
  templateUrl: './custom-panel-styling.component.html',
  styleUrls: ['./custom-panel-styling.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomPanelStylingComponent {
  
  panelColor = new FormControl('red');
}
