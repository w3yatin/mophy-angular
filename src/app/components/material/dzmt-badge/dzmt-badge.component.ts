import { Component } from '@angular/core';

@Component({
  selector: 'app-dzmt-badge',
  templateUrl: './dzmt-badge.component.html',
  styleUrls: ['./dzmt-badge.component.css']
})
export class DzmtBadgeComponent {
  hidden = false;
  
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  contantHead = {
    title: 'Badge',
    title_path: 'Material'    
  }
}
