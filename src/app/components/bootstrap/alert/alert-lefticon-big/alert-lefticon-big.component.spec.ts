import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLefticonBigComponent } from './alert-lefticon-big.component';

describe('AlertLefticonBigComponent', () => {
  let component: AlertLefticonBigComponent;
  let fixture: ComponentFixture<AlertLefticonBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertLefticonBigComponent]
    });
    fixture = TestBed.createComponent(AlertLefticonBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
