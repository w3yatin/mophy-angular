import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipWithHideShowDelayComponent } from './tooltip-with-hide-show-delay.component';

describe('TooltipWithHideShowDelayComponent', () => {
  let component: TooltipWithHideShowDelayComponent;
  let fixture: ComponentFixture<TooltipWithHideShowDelayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipWithHideShowDelayComponent]
    });
    fixture = TestBed.createComponent(TooltipWithHideShowDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
