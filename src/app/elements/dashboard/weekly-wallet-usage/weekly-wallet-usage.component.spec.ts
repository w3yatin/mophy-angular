import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyWalletUsageComponent } from './weekly-wallet-usage.component';

describe('WeeklyWalletUsageComponent', () => {
  let component: WeeklyWalletUsageComponent;
  let fixture: ComponentFixture<WeeklyWalletUsageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyWalletUsageComponent]
    });
    fixture = TestBed.createComponent(WeeklyWalletUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
