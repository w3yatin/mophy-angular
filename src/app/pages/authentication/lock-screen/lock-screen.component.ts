import { Component } from '@angular/core';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent {
  hide_show: boolean = false;
  passwordHide(){
    this.hide_show = !this.hide_show;
  }

  url = '/admin/index'
}
