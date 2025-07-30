import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMinMaxValidationComponent } from './datepicker-min-max-validation.component';

describe('DatepickerMinMaxValidationComponent', () => {
  let component: DatepickerMinMaxValidationComponent;
  let fixture: ComponentFixture<DatepickerMinMaxValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerMinMaxValidationComponent]
    });
    fixture = TestBed.createComponent(DatepickerMinMaxValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
