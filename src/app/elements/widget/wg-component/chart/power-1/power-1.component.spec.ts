import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Power1Component } from './power-1.component';

describe('Power1Component', () => {
  let component: Power1Component;
  let fixture: ComponentFixture<Power1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Power1Component]
    });
    fixture = TestBed.createComponent(Power1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
