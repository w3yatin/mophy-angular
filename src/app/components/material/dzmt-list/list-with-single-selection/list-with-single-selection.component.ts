import { Component } from '@angular/core';

@Component({
  selector: 'app-list-with-single-selection',
  templateUrl: './list-with-single-selection.component.html',
  styleUrls: ['./list-with-single-selection.component.css']
})
export class ListWithSingleSelectionComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
