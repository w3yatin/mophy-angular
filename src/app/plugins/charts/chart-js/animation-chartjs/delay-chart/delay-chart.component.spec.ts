import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayChartComponent } from './delay-chart.component';

describe('DelayChartComponent', () => {
  let component: DelayChartComponent;
  let fixture: ComponentFixture<DelayChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelayChartComponent]
    });
    fixture = TestBed.createComponent(DelayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
