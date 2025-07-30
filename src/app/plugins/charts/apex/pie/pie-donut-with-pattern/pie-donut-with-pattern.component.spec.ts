import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDonutWithPatternComponent } from './pie-donut-with-pattern.component';

describe('PieDonutWithPatternComponent', () => {
  let component: PieDonutWithPatternComponent;
  let fixture: ComponentFixture<PieDonutWithPatternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieDonutWithPatternComponent]
    });
    fixture = TestBed.createComponent(PieDonutWithPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
