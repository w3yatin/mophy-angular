import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Date1Component } from './date1.component';

describe('Date1Component', () => {
  let component: Date1Component;
  let fixture: ComponentFixture<Date1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Date1Component]
    });
    fixture = TestBed.createComponent(Date1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
