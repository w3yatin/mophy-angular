import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperAnimationsComponent } from './stepper-animations.component';

describe('StepperAnimationsComponent', () => {
  let component: StepperAnimationsComponent;
  let fixture: ComponentFixture<StepperAnimationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperAnimationsComponent]
    });
    fixture = TestBed.createComponent(StepperAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
