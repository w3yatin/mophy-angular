import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStalikedComponent } from './chart-staliked.component';

describe('ChartStalikedComponent', () => {
  let component: ChartStalikedComponent;
  let fixture: ComponentFixture<ChartStalikedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartStalikedComponent]
    });
    fixture = TestBed.createComponent(ChartStalikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
