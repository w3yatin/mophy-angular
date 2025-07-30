import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResponsiveComponent } from './table-responsive.component';

describe('TableResponsiveComponent', () => {
  let component: TableResponsiveComponent;
  let fixture: ComponentFixture<TableResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableResponsiveComponent]
    });
    fixture = TestBed.createComponent(TableResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
