import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadingWithBackgroundComponent } from './table-heading-with-background.component';

describe('TableHeadingWithBackgroundComponent', () => {
  let component: TableHeadingWithBackgroundComponent;
  let fixture: ComponentFixture<TableHeadingWithBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableHeadingWithBackgroundComponent]
    });
    fixture = TestBed.createComponent(TableHeadingWithBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
