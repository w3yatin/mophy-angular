import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapBasicComponent } from './heatmap-basic.component';

describe('HeatmapBasicComponent', () => {
  let component: HeatmapBasicComponent;
  let fixture: ComponentFixture<HeatmapBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeatmapBasicComponent]
    });
    fixture = TestBed.createComponent(HeatmapBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
