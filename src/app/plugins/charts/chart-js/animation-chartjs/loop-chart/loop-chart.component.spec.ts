import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopChartComponent } from './loop-chart.component';

describe('LoopChartComponent', () => {
  let component: LoopChartComponent;
  let fixture: ComponentFixture<LoopChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoopChartComponent]
    });
    fixture = TestBed.createComponent(LoopChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
