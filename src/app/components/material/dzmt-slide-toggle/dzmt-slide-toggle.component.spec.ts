import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtSlideToggleComponent } from './dzmt-slide-toggle.component';

describe('DzmtSlideToggleComponent', () => {
  let component: DzmtSlideToggleComponent;
  let fixture: ComponentFixture<DzmtSlideToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtSlideToggleComponent]
    });
    fixture = TestBed.createComponent(DzmtSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
