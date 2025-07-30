import { Component } from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
@Component({
  selector: 'app-datepicker-custom-date-classes',
  templateUrl: './datepicker-custom-date-classes.component.html',
  styleUrls: ['./datepicker-custom-date-classes.component.css'],
})
export class DatepickerCustomDateClassesComponent {
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

}
