import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSales1Component } from './all-sales-1.component';

describe('AllSales1Component', () => {
  let component: AllSales1Component;
  let fixture: ComponentFixture<AllSales1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSales1Component]
    });
    fixture = TestBed.createComponent(AllSales1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
