import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent {
  active = 'home';
  contantHead = {
    title: 'List Group',
    title_path: 'Bootstrap'
  }
}
