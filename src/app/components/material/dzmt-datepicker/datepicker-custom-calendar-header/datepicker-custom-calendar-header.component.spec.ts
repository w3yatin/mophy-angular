import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustomCalendarHeaderComponent } from './datepicker-custom-calendar-header.component';

describe('DatepickerCustomCalendarHeaderComponent', () => {
  let component: DatepickerCustomCalendarHeaderComponent;
  let fixture: ComponentFixture<DatepickerCustomCalendarHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerCustomCalendarHeaderComponent]
    });
    fixture = TestBed.createComponent(DatepickerCustomCalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
