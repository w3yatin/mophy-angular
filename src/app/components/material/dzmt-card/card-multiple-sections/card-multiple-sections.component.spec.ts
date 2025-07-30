import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMultipleSectionsComponent } from './card-multiple-sections.component';

describe('CardMultipleSectionsComponent', () => {
  let component: CardMultipleSectionsComponent;
  let fixture: ComponentFixture<CardMultipleSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMultipleSectionsComponent]
    });
    fixture = TestBed.createComponent(CardMultipleSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
