import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseRateComponent } from './glucose-rate.component';

describe('GlucoseRateComponent', () => {
  let component: GlucoseRateComponent;
  let fixture: ComponentFixture<GlucoseRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlucoseRateComponent]
    });
    fixture = TestBed.createComponent(GlucoseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
