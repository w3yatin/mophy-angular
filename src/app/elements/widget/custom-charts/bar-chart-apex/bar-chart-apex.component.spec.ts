import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartApexComponent } from './bar-chart-apex.component';

describe('BarChartApexComponent', () => {
  let component: BarChartApexComponent;
  let fixture: ComponentFixture<BarChartApexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartApexComponent]
    });
    fixture = TestBed.createComponent(BarChartApexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
