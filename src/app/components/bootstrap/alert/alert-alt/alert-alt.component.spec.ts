import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAltComponent } from './alert-alt.component';

describe('AlertAltComponent', () => {
  let component: AlertAltComponent;
  let fixture: ComponentFixture<AlertAltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertAltComponent]
    });
    fixture = TestBed.createComponent(AlertAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
