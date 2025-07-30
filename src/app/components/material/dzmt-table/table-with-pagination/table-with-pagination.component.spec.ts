import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithPaginationComponent } from './table-with-pagination.component';

describe('TableWithPaginationComponent', () => {
  let component: TableWithPaginationComponent;
  let fixture: ComponentFixture<TableWithPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithPaginationComponent]
    });
    fixture = TestBed.createComponent(TableWithPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
