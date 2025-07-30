import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRoundedComponent } from './alert-rounded.component';

describe('AlertRoundedComponent', () => {
  let component: AlertRoundedComponent;
  let fixture: ComponentFixture<AlertRoundedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertRoundedComponent]
    });
    fixture = TestBed.createComponent(AlertRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
