import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select2Data } from 'ng-select2-component';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent {

  contantHead = {
    title: 'Validation',
    title_path: 'Form'
  }
  hide: boolean = false;
  show_pass() {
    this.hide = !this.hide;
  }
  hidePsw: boolean = true;
  createForm: FormGroup;
  verticalForm: FormGroup;
  submitted: any = false;
  submitted_V: any = false;
  constructor(private fb: FormBuilder) {
    this.createForm = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      suggestions: ['', Validators.required],
      bestSkill: ['', Validators.required],
      currency: ['', Validators.required],
      website: ['', Validators.required],
      phone: ['', Validators.required],
      digits: ['', Validators.required],
      number: ['', Validators.required],
      range: ['', Validators.required],
      conditions: ['', Validators.required]
    });
    this.verticalForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      check_me: ['', Validators.required],
    });
  }
  get f() {
    return this.createForm.controls;
  }
  get vf() {
    return this.verticalForm.controls;
  }
  submit() {    // Submit Form 
    this.submitted = true;
    //  console.log('Submit Button Click', this.createForm.value);
  }
  verticalSubmit() {
    this.submitted_V = true;
    // console.log('Submit Button Click', this.verticalForm.value);
  }
  pswShowHide() {
    this.hidePsw = !this.hidePsw;
  }
  hide_show: boolean = false;
  passwordHide() {
    this.hide_show = !this.hide_show;
  }

  data: Select2Data = [
    {
      value: 'please select',
      label: 'Please select',
      data: { name: 'Please select' }
    },
    {
      value: 'html',
      label: 'HTML',
      data: { name: 'HTML' }
    },
    {
      value: 'css',
      label: 'CSS',
      data: { name: 'CSS' }
    },
    {
      value: 'JavaScript',
      label: 'JavaScript',
      data: { name: 'HTMJavaScriptL' }
    },
    {
      value: 'angular',
      label: 'Angular',
      data: { name: 'Angular' }
    },
    {
      value: 'react',
      label: 'React',
      data: { name: 'React' }
    },
    {
      value: 'Vue.js',
      label: 'Vue.js',
      data: { name: 'Vue.js' }
    },
    {
      value: 'ruby',
      label: 'Ruby',
      data: { name: 'Ruby' }
    },
    {
      value: 'php',
      label: 'PHP',
      data: { name: 'PHP' }
    },
    {
      value: 'ASP.NET',
      label: 'ASP.NET',
      data: { name: 'ASP.NET' }
    },
    {
      value: 'python',
      label: 'Python',
      data: { name: 'Python' }
    },
    {
      value: 'MySQL',
      label: 'MySQL',
      data: { name: 'MySQL' }
    },
  ]

}
