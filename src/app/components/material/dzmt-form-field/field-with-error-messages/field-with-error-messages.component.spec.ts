import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWithErrorMessagesComponent } from './field-with-error-messages.component';

describe('FieldWithErrorMessagesComponent', () => {
  let component: FieldWithErrorMessagesComponent;
  let fixture: ComponentFixture<FieldWithErrorMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldWithErrorMessagesComponent]
    });
    fixture = TestBed.createComponent(FieldWithErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
