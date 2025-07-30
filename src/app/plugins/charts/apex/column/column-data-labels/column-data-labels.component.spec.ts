import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDataLabelsComponent } from './column-data-labels.component';

describe('ColumnDataLabelsComponent', () => {
  let component: ColumnDataLabelsComponent;
  let fixture: ComponentFixture<ColumnDataLabelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnDataLabelsComponent]
    });
    fixture = TestBed.createComponent(ColumnDataLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
