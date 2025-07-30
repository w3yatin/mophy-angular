import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer-explicit-backdrop-setting',
  templateUrl: './drawer-explicit-backdrop-setting.component.html',
  styleUrls: ['./drawer-explicit-backdrop-setting.component.css']
})
export class DrawerExplicitBackdropSettingComponent {
  direction: any;
  ngDoCheck() {
    if(document.body.getAttribute('direction') == 'rtl'){
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
}
