import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieMonochromeComponent } from './pie-monochrome.component';

describe('PieMonochromeComponent', () => {
  let component: PieMonochromeComponent;
  let fixture: ComponentFixture<PieMonochromeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieMonochromeComponent]
    });
    fixture = TestBed.createComponent(PieMonochromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
