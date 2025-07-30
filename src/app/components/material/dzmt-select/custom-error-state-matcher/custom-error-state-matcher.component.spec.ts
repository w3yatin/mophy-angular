import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorStateMatcherComponent } from './custom-error-state-matcher.component';

describe('CustomErrorStateMatcherComponent', () => {
  let component: CustomErrorStateMatcherComponent;
  let fixture: ComponentFixture<CustomErrorStateMatcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomErrorStateMatcherComponent]
    });
    fixture = TestBed.createComponent(CustomErrorStateMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
