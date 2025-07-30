import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWithPrefixSuffixComponent } from './field-with-prefix-suffix.component';

describe('FieldWithPrefixSuffixComponent', () => {
  let component: FieldWithPrefixSuffixComponent;
  let fixture: ComponentFixture<FieldWithPrefixSuffixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldWithPrefixSuffixComponent]
    });
    fixture = TestBed.createComponent(FieldWithPrefixSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
