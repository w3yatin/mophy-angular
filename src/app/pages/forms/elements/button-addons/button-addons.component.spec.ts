import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddonsComponent } from './button-addons.component';

describe('ButtonAddonsComponent', () => {
  let component: ButtonAddonsComponent;
  let fixture: ComponentFixture<ButtonAddonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAddonsComponent]
    });
    fixture = TestBed.createComponent(ButtonAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
