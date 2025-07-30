import { Component } from '@angular/core';

@Component({
  selector: 'app-select-size',
  templateUrl: './select-size.component.html',
  styleUrls: ['./select-size.component.css']
})
export class SelectSizeComponent {
  selectData1 = [
    {
      name: 'Option 1',
    },
    {
      name: 'Option 2',
    },
    {
      name: 'Option 3',
    }
  ];
}
