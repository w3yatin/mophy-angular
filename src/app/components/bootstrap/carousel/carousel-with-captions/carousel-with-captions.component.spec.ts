import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithCaptionsComponent } from './carousel-with-captions.component';

describe('CarouselWithCaptionsComponent', () => {
  let component: CarouselWithCaptionsComponent;
  let fixture: ComponentFixture<CarouselWithCaptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselWithCaptionsComponent]
    });
    fixture = TestBed.createComponent(CarouselWithCaptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
