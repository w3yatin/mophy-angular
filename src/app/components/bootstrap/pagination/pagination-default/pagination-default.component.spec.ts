import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDefaultComponent } from './pagination-default.component';

describe('PaginationDefaultComponent', () => {
  let component: PaginationDefaultComponent;
  let fixture: ComponentFixture<PaginationDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationDefaultComponent]
    });
    fixture = TestBed.createComponent(PaginationDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
