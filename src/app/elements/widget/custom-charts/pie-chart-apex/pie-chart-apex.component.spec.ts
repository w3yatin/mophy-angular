import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartApexComponent } from './pie-chart-apex.component';

describe('PieChartApexComponent', () => {
  let component: PieChartApexComponent;
  let fixture: ComponentFixture<PieChartApexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartApexComponent]
    });
    fixture = TestBed.createComponent(PieChartApexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
