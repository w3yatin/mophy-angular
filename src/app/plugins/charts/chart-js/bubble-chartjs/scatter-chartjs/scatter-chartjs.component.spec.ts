import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterChartjsComponent } from './scatter-chartjs.component';

describe('ScatterChartjsComponent', () => {
  let component: ScatterChartjsComponent;
  let fixture: ComponentFixture<ScatterChartjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScatterChartjsComponent]
    });
    fixture = TestBed.createComponent(ScatterChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
