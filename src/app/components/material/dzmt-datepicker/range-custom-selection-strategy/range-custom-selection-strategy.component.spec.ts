import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeCustomSelectionStrategyComponent } from './range-custom-selection-strategy.component';

describe('RangeCustomSelectionStrategyComponent', () => {
  let component: RangeCustomSelectionStrategyComponent;
  let fixture: ComponentFixture<RangeCustomSelectionStrategyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeCustomSelectionStrategyComponent]
    });
    fixture = TestBed.createComponent(RangeCustomSelectionStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
