import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarStrokedAngularGaugeComponent } from './radialbar-stroked-angular-gauge.component';

describe('RadialbarStrokedAngularGaugeComponent', () => {
  let component: RadialbarStrokedAngularGaugeComponent;
  let fixture: ComponentFixture<RadialbarStrokedAngularGaugeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialbarStrokedAngularGaugeComponent]
    });
    fixture = TestBed.createComponent(RadialbarStrokedAngularGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
