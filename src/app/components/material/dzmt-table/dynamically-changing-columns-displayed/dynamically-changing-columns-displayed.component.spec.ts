import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyChangingColumnsDisplayedComponent } from './dynamically-changing-columns-displayed.component';

describe('DynamicallyChangingColumnsDisplayedComponent', () => {
  let component: DynamicallyChangingColumnsDisplayedComponent;
  let fixture: ComponentFixture<DynamicallyChangingColumnsDisplayedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicallyChangingColumnsDisplayedComponent]
    });
    fixture = TestBed.createComponent(DynamicallyChangingColumnsDisplayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
