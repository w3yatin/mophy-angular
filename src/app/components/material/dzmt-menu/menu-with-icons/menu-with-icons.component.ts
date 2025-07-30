import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-with-icons',
  templateUrl: './menu-with-icons.component.html',
  styleUrls: ['./menu-with-icons.component.css']
})
export class MenuWithIconsComponent {
  direction: any;
  ngDoCheck() {
    if(document.body.getAttribute('direction') == 'rtl'){
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
