import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithDisplayFlexComponent } from './table-with-display-flex.component';

describe('TableWithDisplayFlexComponent', () => {
  let component: TableWithDisplayFlexComponent;
  let fixture: ComponentFixture<TableWithDisplayFlexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithDisplayFlexComponent]
    });
    fixture = TestBed.createComponent(TableWithDisplayFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
