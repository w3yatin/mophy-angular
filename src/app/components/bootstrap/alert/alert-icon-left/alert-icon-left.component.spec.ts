import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIconLeftComponent } from './alert-icon-left.component';

describe('AlertIconLeftComponent', () => {
  let component: AlertIconLeftComponent;
  let fixture: ComponentFixture<AlertIconLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertIconLeftComponent]
    });
    fixture = TestBed.createComponent(AlertIconLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
