import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-chips-drag-drop',
  templateUrl: './chips-drag-drop.component.html',
  styleUrls: ['./chips-drag-drop.component.css']
})
export class ChipsDragDropComponent {
  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
