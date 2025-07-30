import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperHeaderPositionComponent } from './stepper-header-position.component';

describe('StepperHeaderPositionComponent', () => {
  let component: StepperHeaderPositionComponent;
  let fixture: ComponentFixture<StepperHeaderPositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperHeaderPositionComponent]
    });
    fixture = TestBed.createComponent(StepperHeaderPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
