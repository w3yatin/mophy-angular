import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineRadioComponent } from './inline-radio.component';

describe('InlineRadioComponent', () => {
  let component: InlineRadioComponent;
  let fixture: ComponentFixture<InlineRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineRadioComponent]
    });
    fixture = TestBed.createComponent(InlineRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
