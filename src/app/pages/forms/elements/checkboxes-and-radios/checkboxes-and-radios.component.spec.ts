import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesAndRadiosComponent } from './checkboxes-and-radios.component';

describe('CheckboxesAndRadiosComponent', () => {
  let component: CheckboxesAndRadiosComponent;
  let fixture: ComponentFixture<CheckboxesAndRadiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxesAndRadiosComponent]
    });
    fixture = TestBed.createComponent(CheckboxesAndRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
