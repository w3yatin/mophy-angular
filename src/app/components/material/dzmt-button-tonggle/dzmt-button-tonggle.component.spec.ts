import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtButtonTonggleComponent } from './dzmt-button-tonggle.component';

describe('DzmtButtonTonggleComponent', () => {
  let component: DzmtButtonTonggleComponent;
  let fixture: ComponentFixture<DzmtButtonTonggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtButtonTonggleComponent]
    });
    fixture = TestBed.createComponent(DzmtButtonTonggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
