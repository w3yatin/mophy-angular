import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartjsComponent } from './bar-chartjs.component';

describe('BarChartjsComponent', () => {
  let component: BarChartjsComponent;
  let fixture: ComponentFixture<BarChartjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartjsComponent]
    });
    fixture = TestBed.createComponent(BarChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
