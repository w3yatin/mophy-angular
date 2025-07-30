import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGradientComponent } from './chart-gradient.component';

describe('ChartGradientComponent', () => {
  let component: ChartGradientComponent;
  let fixture: ComponentFixture<ChartGradientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartGradientComponent]
    });
    fixture = TestBed.createComponent(ChartGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
