import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDumbbellComponent } from './timeline-dumbbell.component';

describe('TimelineDumbbellComponent', () => {
  let component: TimelineDumbbellComponent;
  let fixture: ComponentFixture<TimelineDumbbellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineDumbbellComponent]
    });
    fixture = TestBed.createComponent(TimelineDumbbellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
