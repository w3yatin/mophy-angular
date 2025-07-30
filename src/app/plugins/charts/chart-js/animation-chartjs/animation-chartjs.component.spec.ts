import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationChartjsComponent } from './animation-chartjs.component';

describe('AnimationChartjsComponent', () => {
  let component: AnimationChartjsComponent;
  let fixture: ComponentFixture<AnimationChartjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationChartjsComponent]
    });
    fixture = TestBed.createComponent(AnimationChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
