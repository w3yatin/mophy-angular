import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtSliderComponent } from './dzmt-slider.component';

describe('DzmtSliderComponent', () => {
  let component: DzmtSliderComponent;
  let fixture: ComponentFixture<DzmtSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtSliderComponent]
    });
    fixture = TestBed.createComponent(DzmtSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
