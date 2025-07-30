import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBasicLineComponent } from './chart-basic-line.component';

describe('ChartBasicLineComponent', () => {
  let component: ChartBasicLineComponent;
  let fixture: ComponentFixture<ChartBasicLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartBasicLineComponent]
    });
    fixture = TestBed.createComponent(ChartBasicLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
