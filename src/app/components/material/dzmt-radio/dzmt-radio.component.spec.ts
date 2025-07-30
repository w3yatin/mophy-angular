import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtRadioComponent } from './dzmt-radio.component';

describe('DzmtRadioComponent', () => {
  let component: DzmtRadioComponent;
  let fixture: ComponentFixture<DzmtRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtRadioComponent]
    });
    fixture = TestBed.createComponent(DzmtRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
