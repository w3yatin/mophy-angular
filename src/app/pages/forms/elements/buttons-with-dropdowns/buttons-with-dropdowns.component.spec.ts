import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsWithDropdownsComponent } from './buttons-with-dropdowns.component';

describe('ButtonsWithDropdownsComponent', () => {
  let component: ButtonsWithDropdownsComponent;
  let fixture: ComponentFixture<ButtonsWithDropdownsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsWithDropdownsComponent]
    });
    fixture = TestBed.createComponent(ButtonsWithDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
