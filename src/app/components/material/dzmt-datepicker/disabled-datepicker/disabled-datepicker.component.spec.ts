import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledDatepickerComponent } from './disabled-datepicker.component';

describe('DisabledDatepickerComponent', () => {
  let component: DisabledDatepickerComponent;
  let fixture: ComponentFixture<DisabledDatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisabledDatepickerComponent]
    });
    fixture = TestBed.createComponent(DisabledDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
