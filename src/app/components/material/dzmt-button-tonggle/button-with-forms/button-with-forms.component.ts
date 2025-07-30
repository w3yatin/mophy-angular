import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-with-forms',
  templateUrl: './button-with-forms.component.html',
  styleUrls: ['./button-with-forms.component.css']
})
export class ButtonWithFormsComponent {
  fontStyleControl = new FormControl();
  fontStyle?: string;

  ngOnInit(): void {
  }
}
