import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStackedComponent } from './bar-stacked.component';

describe('BarStackedComponent', () => {
  let component: BarStackedComponent;
  let fixture: ComponentFixture<BarStackedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarStackedComponent]
    });
    fixture = TestBed.createComponent(BarStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
