import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDemoCarouselComponent } from './card-demo-carousel.component';

describe('CardDemoCarouselComponent', () => {
  let component: CardDemoCarouselComponent;
  let fixture: ComponentFixture<CardDemoCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDemoCarouselComponent]
    });
    fixture = TestBed.createComponent(CardDemoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
