import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-select1',
  templateUrl: './custom-select1.component.html',
  styleUrls: ['./custom-select1.component.css']
})
export class CustomSelect1Component {
  selectData1 = [
    {
      name: 'Choose...',
    },
    {
      name: 'One',
    },
    {
      name: 'two',
    }
  ];
  
}
