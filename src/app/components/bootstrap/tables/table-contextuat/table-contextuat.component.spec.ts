import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContextuatComponent } from './table-contextuat.component';

describe('TableContextuatComponent', () => {
  let component: TableContextuatComponent;
  let fixture: ComponentFixture<TableContextuatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableContextuatComponent]
    });
    fixture = TestBed.createComponent(TableContextuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
