import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-integration',
  templateUrl: './forms-integration.component.html',
  styleUrls: ['./forms-integration.component.css']
})
export class FormsIntegrationComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
