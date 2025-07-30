import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  toggleVal: boolean = false;
  mouseOvered: boolean = false;
  sidebarToggle(eventData: { toggleVal: boolean }) {
    this.toggleVal = eventData.toggleVal;
  }
  iconHoverToggle(val:any){
    this.mouseOvered = val;
  }
}
