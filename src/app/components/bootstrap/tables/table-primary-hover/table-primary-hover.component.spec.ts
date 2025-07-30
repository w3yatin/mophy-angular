import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrimaryHoverComponent } from './table-primary-hover.component';

describe('TablePrimaryHoverComponent', () => {
  let component: TablePrimaryHoverComponent;
  let fixture: ComponentFixture<TablePrimaryHoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePrimaryHoverComponent]
    });
    fixture = TestBed.createComponent(TablePrimaryHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
