import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Power3Component } from './power-3.component';

describe('Power3Component', () => {
  let component: Power3Component;
  let fixture: ComponentFixture<Power3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Power3Component]
    });
    fixture = TestBed.createComponent(Power3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
