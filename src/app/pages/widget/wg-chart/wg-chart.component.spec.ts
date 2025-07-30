import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgChartComponent } from './wg-chart.component';

describe('WgChartComponent', () => {
  let component: WgChartComponent;
  let fixture: ComponentFixture<WgChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WgChartComponent]
    });
    fixture = TestBed.createComponent(WgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
