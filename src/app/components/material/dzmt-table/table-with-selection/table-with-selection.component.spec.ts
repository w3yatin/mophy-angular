import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSelectionComponent } from './table-with-selection.component';

describe('TableWithSelectionComponent', () => {
  let component: TableWithSelectionComponent;
  let fixture: ComponentFixture<TableWithSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithSelectionComponent]
    });
    fixture = TestBed.createComponent(TableWithSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
