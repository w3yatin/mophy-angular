import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartjsComponent } from './area-chartjs.component';

describe('AreaChartjsComponent', () => {
  let component: AreaChartjsComponent;
  let fixture: ComponentFixture<AreaChartjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaChartjsComponent]
    });
    fixture = TestBed.createComponent(AreaChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
