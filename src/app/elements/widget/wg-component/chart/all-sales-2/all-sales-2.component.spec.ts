import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSales2Component } from './all-sales-2.component';

describe('AllSales2Component', () => {
  let component: AllSales2Component;
  let fixture: ComponentFixture<AllSales2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSales2Component]
    });
    fixture = TestBed.createComponent(AllSales2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
