import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabs-with-headers-on-bottom',
  templateUrl: './tabs-with-headers-on-bottom.component.html',
  styleUrls: ['./tabs-with-headers-on-bottom.component.css']
})
export class TabsWithHeadersOnBottomComponent {
  
  
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
