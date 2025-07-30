import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-disabled-select',
  templateUrl: './disabled-select.component.html',
  styleUrls: ['./disabled-select.component.css']
})
export class DisabledSelectComponent {
  disableSelect = new FormControl(false);

}
