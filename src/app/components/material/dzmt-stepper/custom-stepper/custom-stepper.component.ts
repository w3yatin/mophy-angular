import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.css']
})
export class CustomStepperComponent {

  constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    place: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    place: ['', Validators.required],
  });
  therdFormGroup = this._formBuilder.group({
    input1: ['9:00', Validators.required],
    input2: ['6:00', Validators.required]
  });
  isEditable = false;
}
