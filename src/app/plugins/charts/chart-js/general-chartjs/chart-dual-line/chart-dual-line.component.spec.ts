import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDualLineComponent } from './chart-dual-line.component';

describe('ChartDualLineComponent', () => {
  let component: ChartDualLineComponent;
  let fixture: ComponentFixture<ChartDualLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartDualLineComponent]
    });
    fixture = TestBed.createComponent(ChartDualLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
