import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDonutComponent } from './pie-donut.component';

describe('PieDonutComponent', () => {
  let component: PieDonutComponent;
  let fixture: ComponentFixture<PieDonutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieDonutComponent]
    });
    fixture = TestBed.createComponent(PieDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
