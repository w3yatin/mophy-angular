import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormFieldComponent } from './simple-form-field.component';

describe('SimpleFormFieldComponent', () => {
  let component: SimpleFormFieldComponent;
  let fixture: ComponentFixture<SimpleFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleFormFieldComponent]
    });
    fixture = TestBed.createComponent(SimpleFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
