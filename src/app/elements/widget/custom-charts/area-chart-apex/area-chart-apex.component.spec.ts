import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartApexComponent } from './area-chart-apex.component';

describe('AreaChartApexComponent', () => {
  let component: AreaChartApexComponent;
  let fixture: ComponentFixture<AreaChartApexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaChartApexComponent]
    });
    fixture = TestBed.createComponent(AreaChartApexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
