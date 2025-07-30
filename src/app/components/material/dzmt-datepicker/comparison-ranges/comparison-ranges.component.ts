import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-comparison-ranges',
  templateUrl: './comparison-ranges.component.html',
  styleUrls: ['./comparison-ranges.component.css']
})
export class ComparisonRangesComponent {
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}
