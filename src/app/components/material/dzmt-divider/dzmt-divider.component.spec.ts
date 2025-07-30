import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtDividerComponent } from './dzmt-divider.component';

describe('DzmtDividerComponent', () => {
  let component: DzmtDividerComponent;
  let fixture: ComponentFixture<DzmtDividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtDividerComponent]
    });
    fixture = TestBed.createComponent(DzmtDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
