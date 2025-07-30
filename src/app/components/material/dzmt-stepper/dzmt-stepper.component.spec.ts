import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtStepperComponent } from './dzmt-stepper.component';

describe('DzmtStepperComponent', () => {
  let component: DzmtStepperComponent;
  let fixture: ComponentFixture<DzmtStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtStepperComponent]
    });
    fixture = TestBed.createComponent(DzmtStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
