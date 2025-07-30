import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-pickers',
  templateUrl: './pickers.component.html',
  styleUrls: ['./pickers.component.css']
})
export class PickersComponent {
  contantHead = {
    title: 'Pickers',
    title_path: 'Form'    
  }

  navigation = 'arrows';
	outsideDays = 'visible';
  
  model: NgbDateStruct | undefined;
}
