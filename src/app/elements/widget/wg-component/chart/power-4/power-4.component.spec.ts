import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Power4Component } from './power-4.component';

describe('Power4Component', () => {
  let component: Power4Component;
  let fixture: ComponentFixture<Power4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Power4Component]
    });
    fixture = TestBed.createComponent(Power4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
