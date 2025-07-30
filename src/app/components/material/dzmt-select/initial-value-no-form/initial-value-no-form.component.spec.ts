import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialValueNoFormComponent } from './initial-value-no-form.component';

describe('InitialValueNoFormComponent', () => {
  let component: InitialValueNoFormComponent;
  let fixture: ComponentFixture<InitialValueNoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialValueNoFormComponent]
    });
    fixture = TestBed.createComponent(InitialValueNoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
