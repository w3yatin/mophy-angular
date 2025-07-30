import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnStackedComponent } from './column-stacked.component';

describe('ColumnStackedComponent', () => {
  let component: ColumnStackedComponent;
  let fixture: ComponentFixture<ColumnStackedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnStackedComponent]
    });
    fixture = TestBed.createComponent(ColumnStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
