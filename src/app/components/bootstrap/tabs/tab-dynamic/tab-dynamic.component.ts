import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-dynamic',
  templateUrl: './tab-dynamic.component.html',
  styleUrls: ['./tab-dynamic.component.css']
})
export class TabDynamicComponent {
  constructor() { }
  
  tabs = [1, 2, 3, 4, 5];
 counter = this.tabs.length + 1;
 active: any;

 close(event: MouseEvent, toRemove: number) {
   this.tabs = this.tabs.filter(id => id !== toRemove);
   event.preventDefault();
   event.stopImmediatePropagation();
 }

 add(event: MouseEvent) {
   this.tabs.push(this.counter++);
   event.preventDefault();
 }
 
 ngOnInit(): void {
 }

}
