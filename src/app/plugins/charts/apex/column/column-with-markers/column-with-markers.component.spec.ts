import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnWithMarkersComponent } from './column-with-markers.component';

describe('ColumnWithMarkersComponent', () => {
  let component: ColumnWithMarkersComponent;
  let fixture: ComponentFixture<ColumnWithMarkersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnWithMarkersComponent]
    });
    fixture = TestBed.createComponent(ColumnWithMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
