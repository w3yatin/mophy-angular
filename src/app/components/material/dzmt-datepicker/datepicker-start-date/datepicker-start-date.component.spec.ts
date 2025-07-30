import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerStartDateComponent } from './datepicker-start-date.component';

describe('DatepickerStartDateComponent', () => {
  let component: DatepickerStartDateComponent;
  let fixture: ComponentFixture<DatepickerStartDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerStartDateComponent]
    });
    fixture = TestBed.createComponent(DatepickerStartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
