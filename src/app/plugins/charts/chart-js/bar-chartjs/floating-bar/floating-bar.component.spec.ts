import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingBarComponent } from './floating-bar.component';

describe('FloatingBarComponent', () => {
  let component: FloatingBarComponent;
  let fixture: ComponentFixture<FloatingBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingBarComponent]
    });
    fixture = TestBed.createComponent(FloatingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
