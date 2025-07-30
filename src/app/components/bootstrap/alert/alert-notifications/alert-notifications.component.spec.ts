import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertNotificationsComponent } from './alert-notifications.component';

describe('AlertNotificationsComponent', () => {
  let component: AlertNotificationsComponent;
  let fixture: ComponentFixture<AlertNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertNotificationsComponent]
    });
    fixture = TestBed.createComponent(AlertNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
