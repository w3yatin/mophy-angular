import { Component, Input } from '@angular/core';
import { Select2Data } from 'ng-select2-component';

@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.css']
})
export class Select2Component {

  @Input() items: any = '';
  valueSet:any = 'Select Status';
  ngOnInit() {
    this.valueSet = this.items[0].name;
    this.items.map((item: any, ind: any) => {
      this.data.push(
        {
          value: item.name,
          label: item.name,
          data: { name: item.name }
        }
      )
    });
  }

  data: Select2Data = []

}
