import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPaymentIdComponent } from './details-payment-id.component';

describe('DetailsPaymentIdComponent', () => {
  let component: DetailsPaymentIdComponent;
  let fixture: ComponentFixture<DetailsPaymentIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPaymentIdComponent]
    });
    fixture = TestBed.createComponent(DetailsPaymentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
