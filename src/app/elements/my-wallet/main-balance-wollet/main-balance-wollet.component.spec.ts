import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBalanceWolletComponent } from './main-balance-wollet.component';

describe('MainBalanceWolletComponent', () => {
  let component: MainBalanceWolletComponent;
  let fixture: ComponentFixture<MainBalanceWolletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBalanceWolletComponent]
    });
    fixture = TestBed.createComponent(MainBalanceWolletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
