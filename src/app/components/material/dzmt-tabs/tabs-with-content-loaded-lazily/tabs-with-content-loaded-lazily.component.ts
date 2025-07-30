import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-with-content-loaded-lazily',
  templateUrl: './tabs-with-content-loaded-lazily.component.html',
  styleUrls: ['./tabs-with-content-loaded-lazily.component.css']
})
export class TabsWithContentLoadedLazilyComponent {
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
