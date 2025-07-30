import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompletePlaneComponent } from './dzmt-autocomplete-plane.component';

describe('DzmtAutocompletePlaneComponent', () => {
  let component: DzmtAutocompletePlaneComponent;
  let fixture: ComponentFixture<DzmtAutocompletePlaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtAutocompletePlaneComponent]
    });
    fixture = TestBed.createComponent(DzmtAutocompletePlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
