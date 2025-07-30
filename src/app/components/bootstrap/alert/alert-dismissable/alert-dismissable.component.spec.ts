import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDismissableComponent } from './alert-dismissable.component';

describe('AlertDismissableComponent', () => {
  let component: AlertDismissableComponent;
  let fixture: ComponentFixture<AlertDismissableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertDismissableComponent]
    });
    fixture = TestBed.createComponent(AlertDismissableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
