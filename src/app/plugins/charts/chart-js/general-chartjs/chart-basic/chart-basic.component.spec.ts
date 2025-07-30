import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBasicComponent } from './chart-basic.component';

describe('ChartBasicComponent', () => {
  let component: ChartBasicComponent;
  let fixture: ComponentFixture<ChartBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartBasicComponent]
    });
    fixture = TestBed.createComponent(ChartBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
