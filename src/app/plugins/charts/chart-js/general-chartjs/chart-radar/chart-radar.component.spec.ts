import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRadarComponent } from './chart-radar.component';

describe('ChartRadarComponent', () => {
  let component: ChartRadarComponent;
  let fixture: ComponentFixture<ChartRadarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartRadarComponent]
    });
    fixture = TestBed.createComponent(ChartRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
