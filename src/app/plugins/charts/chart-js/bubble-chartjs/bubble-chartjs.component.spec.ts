import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleChartjsComponent } from './bubble-chartjs.component';

describe('BubbleChartjsComponent', () => {
  let component: BubbleChartjsComponent;
  let fixture: ComponentFixture<BubbleChartjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleChartjsComponent]
    });
    fixture = TestBed.createComponent(BubbleChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
