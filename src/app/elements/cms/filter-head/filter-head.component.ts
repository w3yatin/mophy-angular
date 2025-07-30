import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter-head',
  templateUrl: './filter-head.component.html',
  styleUrls: ['./filter-head.component.css']
})
export class FilterHeadComponent {

  activeToggleArray = [1, 2]
  dropicon(id: any) {
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }


  navigation = 'arrows';
  outsideDays = 'visible';

  model: NgbDateStruct | undefined;


  select2Data = [
    {
      name: 'Select Status',
    },
    {
      name: 'published',
    },
    {
      name: 'draft',
    },
    {
      name: 'private',
    },
    {
      name: 'pending',
    },
  ];
}
