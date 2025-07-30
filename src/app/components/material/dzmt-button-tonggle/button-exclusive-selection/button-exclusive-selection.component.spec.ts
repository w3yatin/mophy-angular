import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExclusiveSelectionComponent } from './button-exclusive-selection.component';

describe('ButtonExclusiveSelectionComponent', () => {
  let component: ButtonExclusiveSelectionComponent;
  let fixture: ComponentFixture<ButtonExclusiveSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonExclusiveSelectionComponent]
    });
    fixture = TestBed.createComponent(ButtonExclusiveSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
