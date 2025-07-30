import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipManuallyShowHideComponent } from './tooltip-manually-show-hide.component';

describe('TooltipManuallyShowHideComponent', () => {
  let component: TooltipManuallyShowHideComponent;
  let fixture: ComponentFixture<TooltipManuallyShowHideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipManuallyShowHideComponent]
    });
    fixture = TestBed.createComponent(TooltipManuallyShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
