import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

export interface type {
  title: string,
  completed: boolean
}
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {
  contantHead = {
    title: 'Menus',
    title_path: 'CMS'    
  }
  activeToggleArray = [1, 2, 3, 4];
  movies = [
    { key: 'collapseOne', value: 'Contact Us' },
    { key: 'collapseTwo', value: 'Privacy Policy' },
    { key: 'collapseThree', value: 'Terms and Conditions' },
    { key: 'collapseFour', value: 'About Us' },
    { key: 'collapseFive', value: 'Important Information' },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  allComplete: boolean = false;
  pagesArr: type[] = [
    { title: 'Privacy Policy ', completed: false },
    { title: ' Contact Us ', completed: false },
    { title: 'Important Information', completed: false },
    { title: 'About Us', completed: false },
    { title: ' Dummy Co', completed: false },
  ]
  setAll() {
    for (var i in this.pagesArr) {
      if (!this.pagesArr[i].completed) {
        this.pagesArr[i].completed = true;
      }
    }
  }
  deselectAll(){
    for (var i in this.pagesArr) {
      if (this.pagesArr[i].completed) {
        this.pagesArr[i].completed = false;
      }
    }
  }
  dropicon(id: any) {
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

  select2Data = [
    {
      name: 'Select Menu',
    },
    {
      name: 'India',
    },
    {
      name: 'Information',
    },
    {
      name: 'New Menu',
    },
    {
      name: 'Page Menu',
    },
  ];
}
