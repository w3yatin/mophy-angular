import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide_show: boolean = false;
  passwordHide(){
    this.hide_show = !this.hide_show;
  }
  url = '/admin/index'
}
