import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithHintsComponent } from './input-with-hints.component';

describe('InputWithHintsComponent', () => {
  let component: InputWithHintsComponent;
  let fixture: ComponentFixture<InputWithHintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputWithHintsComponent]
    });
    fixture = TestBed.createComponent(InputWithHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
