import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarSemiCircleGaugeComponent } from './radialbar-semi-circle-gauge.component';

describe('RadialbarSemiCircleGaugeComponent', () => {
  let component: RadialbarSemiCircleGaugeComponent;
  let fixture: ComponentFixture<RadialbarSemiCircleGaugeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialbarSemiCircleGaugeComponent]
    });
    fixture = TestBed.createComponent(RadialbarSemiCircleGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
