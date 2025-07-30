import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationChartComponent } from './interpolation-chart.component';

describe('InterpolationChartComponent', () => {
  let component: InterpolationChartComponent;
  let fixture: ComponentFixture<InterpolationChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolationChartComponent]
    });
    fixture = TestBed.createComponent(InterpolationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
