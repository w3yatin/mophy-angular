import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-positioning',
  templateUrl: './menu-positioning.component.html',
  styleUrls: ['./menu-positioning.component.css']
})
export class MenuPositioningComponent {
  direction: any;
  ngDoCheck() {
    if(document.body.getAttribute('direction') == 'rtl'){
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
