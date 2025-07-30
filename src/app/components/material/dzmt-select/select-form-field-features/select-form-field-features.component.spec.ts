import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormFieldFeaturesComponent } from './select-form-field-features.component';

describe('SelectFormFieldFeaturesComponent', () => {
  let component: SelectFormFieldFeaturesComponent;
  let fixture: ComponentFixture<SelectFormFieldFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFormFieldFeaturesComponent]
    });
    fixture = TestBed.createComponent(SelectFormFieldFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
