import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-with-error-message',
  templateUrl: './input-with-error-message.component.html',
  styleUrls: ['./input-with-error-message.component.css']
})
export class InputWithErrorMessageComponent {
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
