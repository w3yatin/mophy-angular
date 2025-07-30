import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustomDateClassesComponent } from './datepicker-custom-date-classes.component';

describe('DatepickerCustomDateClassesComponent', () => {
  let component: DatepickerCustomDateClassesComponent;
  let fixture: ComponentFixture<DatepickerCustomDateClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerCustomDateClassesComponent]
    });
    fixture = TestBed.createComponent(DatepickerCustomDateClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
