import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-optional-steps',
  templateUrl: './optional-steps.component.html',
  styleUrls: ['./optional-steps.component.css']
})
export class OptionalStepsComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = false;

  constructor(private _formBuilder: FormBuilder) {}
}
