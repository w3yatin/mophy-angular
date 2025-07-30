import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarCustomAngleCircleComponent } from './radialbar-custom-angle-circle.component';

describe('RadialbarCustomAngleCircleComponent', () => {
  let component: RadialbarCustomAngleCircleComponent;
  let fixture: ComponentFixture<RadialbarCustomAngleCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialbarCustomAngleCircleComponent]
    });
    fixture = TestBed.createComponent(RadialbarCustomAngleCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
