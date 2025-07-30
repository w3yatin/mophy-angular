import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tooltip-with-changing-message',
  templateUrl: './tooltip-with-changing-message.component.html',
  styleUrls: ['./tooltip-with-changing-message.component.css']
})
export class TooltipWithChangingMessageComponent {

  message = new FormControl('Info about the action');
}
