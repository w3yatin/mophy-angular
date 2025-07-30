import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithSimpleTextHeaderFooterComponent } from './table-with-simple-text-header-footer.component';

describe('TableWithSimpleTextHeaderFooterComponent', () => {
  let component: TableWithSimpleTextHeaderFooterComponent;
  let fixture: ComponentFixture<TableWithSimpleTextHeaderFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithSimpleTextHeaderFooterComponent]
    });
    fixture = TestBed.createComponent(TableWithSimpleTextHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
