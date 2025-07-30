import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dzmt-autocomplete-simple',
  templateUrl: './dzmt-autocomplete-simple.component.html',
  styleUrls: ['./dzmt-autocomplete-simple.component.css']
})
export class DzmtAutocompleteSimpleComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

}
