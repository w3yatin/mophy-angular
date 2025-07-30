import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBasicTogglesComponent } from './button-basic-toggles.component';

describe('ButtonBasicTogglesComponent', () => {
  let component: ButtonBasicTogglesComponent;
  let fixture: ComponentFixture<ButtonBasicTogglesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonBasicTogglesComponent]
    });
    fixture = TestBed.createComponent(ButtonBasicTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
