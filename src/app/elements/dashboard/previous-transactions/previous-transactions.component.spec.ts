import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTransactionsComponent } from './previous-transactions.component';

describe('PreviousTransactionsComponent', () => {
  let component: PreviousTransactionsComponent;
  let fixture: ComponentFixture<PreviousTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousTransactionsComponent]
    });
    fixture = TestBed.createComponent(PreviousTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
