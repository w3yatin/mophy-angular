import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedMultipleYAxisComponent } from './mixed-multiple-y-axis.component';

describe('MixedMultipleYAxisComponent', () => {
  let component: MixedMultipleYAxisComponent;
  let fixture: ComponentFixture<MixedMultipleYAxisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MixedMultipleYAxisComponent]
    });
    fixture = TestBed.createComponent(MixedMultipleYAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
