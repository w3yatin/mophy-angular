import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHeadComponent } from './filter-head.component';

describe('FilterHeadComponent', () => {
  let component: FilterHeadComponent;
  let fixture: ComponentFixture<FilterHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterHeadComponent]
    });
    fixture = TestBed.createComponent(FilterHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
