import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMessageWithsolidComponent } from './alert-message-withsolid.component';

describe('AlertMessageWithsolidComponent', () => {
  let component: AlertMessageWithsolidComponent;
  let fixture: ComponentFixture<AlertMessageWithsolidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertMessageWithsolidComponent]
    });
    fixture = TestBed.createComponent(AlertMessageWithsolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
