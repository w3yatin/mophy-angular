import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtSelectComponent } from './dzmt-select.component';

describe('DzmtSelectComponent', () => {
  let component: DzmtSelectComponent;
  let fixture: ComponentFixture<DzmtSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtSelectComponent]
    });
    fixture = TestBed.createComponent(DzmtSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
