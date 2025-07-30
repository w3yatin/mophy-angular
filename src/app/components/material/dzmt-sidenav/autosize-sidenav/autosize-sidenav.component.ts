import { Component } from '@angular/core';

@Component({
  selector: 'app-autosize-sidenav',
  templateUrl: './autosize-sidenav.component.html',
  styleUrls: ['./autosize-sidenav.component.css']
})
export class AutosizeSidenavComponent {
  showFiller = false;
  direction: any;
  ngDoCheck() {
    if(document.body.getAttribute('direction') == 'rtl'){
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
