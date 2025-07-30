import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTransactionComponent } from './head-transaction.component';

describe('HeadTransactionComponent', () => {
  let component: HeadTransactionComponent;
  let fixture: ComponentFixture<HeadTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadTransactionComponent]
    });
    fixture = TestBed.createComponent(HeadTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
