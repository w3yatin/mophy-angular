import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalStepsComponent } from './optional-steps.component';

describe('OptionalStepsComponent', () => {
  let component: OptionalStepsComponent;
  let fixture: ComponentFixture<OptionalStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionalStepsComponent]
    });
    fixture = TestBed.createComponent(OptionalStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
