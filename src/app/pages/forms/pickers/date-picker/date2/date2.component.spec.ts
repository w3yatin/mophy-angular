import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Date2Component } from './date2.component';

describe('Date2Component', () => {
  let component: Date2Component;
  let fixture: ComponentFixture<Date2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Date2Component]
    });
    fixture = TestBed.createComponent(Date2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
