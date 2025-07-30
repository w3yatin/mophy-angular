import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnNegativeValuesComponent } from './column-negative-values.component';

describe('ColumnNegativeValuesComponent', () => {
  let component: ColumnNegativeValuesComponent;
  let fixture: ComponentFixture<ColumnNegativeValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnNegativeValuesComponent]
    });
    fixture = TestBed.createComponent(ColumnNegativeValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
