import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarStripedComponent } from './progressbar-striped.component';

describe('ProgressbarStripedComponent', () => {
  let component: ProgressbarStripedComponent;
  let fixture: ComponentFixture<ProgressbarStripedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressbarStripedComponent]
    });
    fixture = TestBed.createComponent(ProgressbarStripedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
