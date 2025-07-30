import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartjsComponent } from './line-chartjs.component';

describe('LineChartjsComponent', () => {
  let component: LineChartjsComponent;
  let fixture: ComponentFixture<LineChartjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartjsComponent]
    });
    fixture = TestBed.createComponent(LineChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
