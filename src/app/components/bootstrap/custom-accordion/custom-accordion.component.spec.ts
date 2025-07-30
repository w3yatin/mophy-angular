import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAccordionComponent } from './custom-accordion.component';

describe('CustomAccordionComponent', () => {
  let component: CustomAccordionComponent;
  let fixture: ComponentFixture<CustomAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAccordionComponent]
    });
    fixture = TestBed.createComponent(CustomAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
