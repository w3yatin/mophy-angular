import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Power2Component } from './power-2.component';

describe('Power2Component', () => {
  let component: Power2Component;
  let fixture: ComponentFixture<Power2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Power2Component]
    });
    fixture = TestBed.createComponent(Power2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
