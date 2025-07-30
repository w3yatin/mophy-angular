import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieGradientDonutComponent } from './pie-gradient-donut.component';

describe('PieGradientDonutComponent', () => {
  let component: PieGradientDonutComponent;
  let fixture: ComponentFixture<PieGradientDonutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieGradientDonutComponent]
    });
    fixture = TestBed.createComponent(PieGradientDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
