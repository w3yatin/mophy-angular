import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timeline1Component } from './timeline-1.component';

describe('Timeline1Component', () => {
  let component: Timeline1Component;
  let fixture: ComponentFixture<Timeline1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Timeline1Component]
    });
    fixture = TestBed.createComponent(Timeline1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
