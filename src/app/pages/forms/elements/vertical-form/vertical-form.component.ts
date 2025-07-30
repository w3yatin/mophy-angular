import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-form',
  templateUrl: './vertical-form.component.html',
  styleUrls: ['./vertical-form.component.css']
})
export class VerticalFormComponent {
  hide:boolean = false;
  show_pass(){
    this.hide = !this.hide;
  }
}
