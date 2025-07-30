import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-form',
  templateUrl: './horizontal-form.component.html',
  styleUrls: ['./horizontal-form.component.css']
})
export class HorizontalFormComponent {
  hide:boolean = false;
  show_pass(){
    this.hide = !this.hide;
  }

  select2Data = [
    {
      name: 'Choose...',
    },
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
