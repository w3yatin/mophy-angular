import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWithLabelComponent } from './field-with-label.component';

describe('FieldWithLabelComponent', () => {
  let component: FieldWithLabelComponent;
  let fixture: ComponentFixture<FieldWithLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldWithLabelComponent]
    });
    fixture = TestBed.createComponent(FieldWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
