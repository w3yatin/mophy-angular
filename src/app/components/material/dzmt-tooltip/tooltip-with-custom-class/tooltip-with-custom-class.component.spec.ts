import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipWithCustomClassComponent } from './tooltip-with-custom-class.component';

describe('TooltipWithCustomClassComponent', () => {
  let component: TooltipWithCustomClassComponent;
  let fixture: ComponentFixture<TooltipWithCustomClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipWithCustomClassComponent]
    });
    fixture = TestBed.createComponent(TooltipWithCustomClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
