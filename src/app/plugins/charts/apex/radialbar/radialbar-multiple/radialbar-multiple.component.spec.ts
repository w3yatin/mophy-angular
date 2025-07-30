import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarMultipleComponent } from './radialbar-multiple.component';

describe('RadialbarMultipleComponent', () => {
  let component: RadialbarMultipleComponent;
  let fixture: ComponentFixture<RadialbarMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialbarMultipleComponent]
    });
    fixture = TestBed.createComponent(RadialbarMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
