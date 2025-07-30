import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertOutlineComponent } from './alert-outline.component';

describe('AlertOutlineComponent', () => {
  let component: AlertOutlineComponent;
  let fixture: ComponentFixture<AlertOutlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertOutlineComponent]
    });
    fixture = TestBed.createComponent(AlertOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
