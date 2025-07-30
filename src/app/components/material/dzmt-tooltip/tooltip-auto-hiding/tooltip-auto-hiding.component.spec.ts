import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipAutoHidingComponent } from './tooltip-auto-hiding.component';

describe('TooltipAutoHidingComponent', () => {
  let component: TooltipAutoHidingComponent;
  let fixture: ComponentFixture<TooltipAutoHidingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipAutoHidingComponent]
    });
    fixture = TestBed.createComponent(TooltipAutoHidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
