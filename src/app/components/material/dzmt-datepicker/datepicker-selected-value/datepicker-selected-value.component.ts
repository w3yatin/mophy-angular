import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-selected-value',
  templateUrl: './datepicker-selected-value.component.html',
  styleUrls: ['./datepicker-selected-value.component.css']
})
export class DatepickerSelectedValueComponent {
  
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

}
