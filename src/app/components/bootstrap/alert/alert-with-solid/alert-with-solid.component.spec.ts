import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWithSolidComponent } from './alert-with-solid.component';

describe('AlertWithSolidComponent', () => {
  let component: AlertWithSolidComponent;
  let fixture: ComponentFixture<AlertWithSolidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertWithSolidComponent]
    });
    fixture = TestBed.createComponent(AlertWithSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
