import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMultipleSeriesComponent } from './timeline-multiple-series.component';

describe('TimelineMultipleSeriesComponent', () => {
  let component: TimelineMultipleSeriesComponent;
  let fixture: ComponentFixture<TimelineMultipleSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineMultipleSeriesComponent]
    });
    fixture = TestBed.createComponent(TimelineMultipleSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
