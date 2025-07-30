import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMixedTypeComponent } from './chart-mixed-type.component';

describe('ChartMixedTypeComponent', () => {
  let component: ChartMixedTypeComponent;
  let fixture: ComponentFixture<ChartMixedTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartMixedTypeComponent]
    });
    fixture = TestBed.createComponent(ChartMixedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
