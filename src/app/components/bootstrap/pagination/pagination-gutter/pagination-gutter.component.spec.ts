import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationGutterComponent } from './pagination-gutter.component';

describe('PaginationGutterComponent', () => {
  let component: PaginationGutterComponent;
  let fixture: ComponentFixture<PaginationGutterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationGutterComponent]
    });
    fixture = TestBed.createComponent(PaginationGutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
