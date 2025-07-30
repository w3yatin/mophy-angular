import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineStackedChartComponent } from './line-stacked-chart.component';

describe('LineStackedChartComponent', () => {
  let component: LineStackedChartComponent;
  let fixture: ComponentFixture<LineStackedChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineStackedChartComponent]
    });
    fixture = TestBed.createComponent(LineStackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
