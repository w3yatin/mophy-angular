import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHoverComponent } from './table-hover.component';

describe('TableHoverComponent', () => {
  let component: TableHoverComponent;
  let fixture: ComponentFixture<TableHoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableHoverComponent]
    });
    fixture = TestBed.createComponent(TableHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
