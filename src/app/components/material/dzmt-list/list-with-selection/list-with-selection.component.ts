import { Component } from '@angular/core';

@Component({
  selector: 'app-list-with-selection',
  templateUrl: './list-with-selection.component.html',
  styleUrls: ['./list-with-selection.component.css']
})
export class ListWithSelectionComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
