import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerFilterValidationComponent } from './datepicker-filter-validation.component';

describe('DatepickerFilterValidationComponent', () => {
  let component: DatepickerFilterValidationComponent;
  let fixture: ComponentFixture<DatepickerFilterValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerFilterValidationComponent]
    });
    fixture = TestBed.createComponent(DatepickerFilterValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
