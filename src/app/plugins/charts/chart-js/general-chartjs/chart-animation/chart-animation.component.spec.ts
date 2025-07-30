import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAnimationComponent } from './chart-animation.component';

describe('ChartAnimationComponent', () => {
  let component: ChartAnimationComponent;
  let fixture: ComponentFixture<ChartAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartAnimationComponent]
    });
    fixture = TestBed.createComponent(ChartAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
