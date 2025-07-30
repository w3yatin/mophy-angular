import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent {

  @Input() dropdown :any | undefined;
  getValue:any = '';
  selectValue:string = '';

  ngOnInit(){
    this.getValue = this.dropdown.value;
    this.selectValue = this.dropdown.select;
  }
  getValueDrop(get: any) {
      this.selectValue = get.item;
  }
}
