import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent {
  select2Data = [
    {
      name: 'Select Status',
    },
    {
      name: 'Published',
    },
    {
      name: 'Draft',
    },
    {
      name: 'Private',
    },
    {
      name: 'Pending',
    },
  ];

  
  navigation = 'arrows';
  outsideDays = 'visible';

  model: NgbDateStruct | undefined;
}
