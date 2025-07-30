import { Component } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css', '../../../../../assets/css/custom.css']
})
export class ReadComponent {
  isVisited:boolean = false;
  
  contantHead = {
    title: 'Read',
    title_path: 'Email'
  }
  inboxSidebar() {
    this.isVisited = !this.isVisited;
  }
}
