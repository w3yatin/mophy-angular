import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWithlinkSolidcolorComponent } from './alert-withlink-solidcolor.component';

describe('AlertWithlinkSolidcolorComponent', () => {
  let component: AlertWithlinkSolidcolorComponent;
  let fixture: ComponentFixture<AlertWithlinkSolidcolorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertWithlinkSolidcolorComponent]
    });
    fixture = TestBed.createComponent(AlertWithlinkSolidcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
