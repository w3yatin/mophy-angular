import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-input-change-events',
  templateUrl: './input-change-events.component.html',
  styleUrls: ['./input-change-events.component.css']
})
export class InputChangeEventsComponent {
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}
