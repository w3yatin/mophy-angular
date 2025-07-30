import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tooltip-with-show-hide-delay',
  templateUrl: './tooltip-with-show-hide-delay.component.html',
  styleUrls: ['./tooltip-with-show-hide-delay.component.css']
})
export class TooltipWithShowHideDelayComponent {
  
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

}
