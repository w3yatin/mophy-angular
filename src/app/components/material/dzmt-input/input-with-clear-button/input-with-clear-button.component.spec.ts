import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithClearButtonComponent } from './input-with-clear-button.component';

describe('InputWithClearButtonComponent', () => {
  let component: InputWithClearButtonComponent;
  let fixture: ComponentFixture<InputWithClearButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputWithClearButtonComponent]
    });
    fixture = TestBed.createComponent(InputWithClearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
