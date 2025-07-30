import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarVerticalTopComponent } from './progressbar-vertical-top.component';

describe('ProgressbarVerticalTopComponent', () => {
  let component: ProgressbarVerticalTopComponent;
  let fixture: ComponentFixture<ProgressbarVerticalTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressbarVerticalTopComponent]
    });
    fixture = TestBed.createComponent(ProgressbarVerticalTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
