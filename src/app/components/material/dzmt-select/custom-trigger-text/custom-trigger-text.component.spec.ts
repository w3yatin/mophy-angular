import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTriggerTextComponent } from './custom-trigger-text.component';

describe('CustomTriggerTextComponent', () => {
  let component: CustomTriggerTextComponent;
  let fixture: ComponentFixture<CustomTriggerTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTriggerTextComponent]
    });
    fixture = TestBed.createComponent(CustomTriggerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
