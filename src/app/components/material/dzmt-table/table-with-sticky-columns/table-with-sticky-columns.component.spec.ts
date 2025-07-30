import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithStickyColumnsComponent } from './table-with-sticky-columns.component';

describe('TableWithStickyColumnsComponent', () => {
  let component: TableWithStickyColumnsComponent;
  let fixture: ComponentFixture<TableWithStickyColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithStickyColumnsComponent]
    });
    fixture = TestBed.createComponent(TableWithStickyColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
