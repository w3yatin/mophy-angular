import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreemapMultipleSeriesComponent } from './treemap-multiple-series.component';

describe('TreemapMultipleSeriesComponent', () => {
  let component: TreemapMultipleSeriesComponent;
  let fixture: ComponentFixture<TreemapMultipleSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreemapMultipleSeriesComponent]
    });
    fixture = TestBed.createComponent(TreemapMultipleSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
