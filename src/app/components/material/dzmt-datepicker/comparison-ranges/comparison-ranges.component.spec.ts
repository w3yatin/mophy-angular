import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonRangesComponent } from './comparison-ranges.component';

describe('ComparisonRangesComponent', () => {
  let component: ComparisonRangesComponent;
  let fixture: ComponentFixture<ComparisonRangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonRangesComponent]
    });
    fixture = TestBed.createComponent(ComparisonRangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
