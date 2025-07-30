import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLabelSizeComponent } from './form-label-size.component';

describe('FormLabelSizeComponent', () => {
  let component: FormLabelSizeComponent;
  let fixture: ComponentFixture<FormLabelSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormLabelSizeComponent]
    });
    fixture = TestBed.createComponent(FormLabelSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
