import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtChipsComponent } from './dzmt-chips.component';

describe('DzmtChipsComponent', () => {
  let component: DzmtChipsComponent;
  let fixture: ComponentFixture<DzmtChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtChipsComponent]
    });
    fixture = TestBed.createComponent(DzmtChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
