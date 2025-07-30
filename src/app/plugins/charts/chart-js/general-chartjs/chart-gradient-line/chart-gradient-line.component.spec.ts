import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGradientLineComponent } from './chart-gradient-line.component';

describe('ChartGradientLineComponent', () => {
  let component: ChartGradientLineComponent;
  let fixture: ComponentFixture<ChartGradientLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartGradientLineComponent]
    });
    fixture = TestBed.createComponent(ChartGradientLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
