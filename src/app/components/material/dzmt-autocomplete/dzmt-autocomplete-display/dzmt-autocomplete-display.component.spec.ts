import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteDisplayComponent } from './dzmt-autocomplete-display.component';

describe('DzmtAutocompleteDisplayComponent', () => {
  let component: DzmtAutocompleteDisplayComponent;
  let fixture: ComponentFixture<DzmtAutocompleteDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtAutocompleteDisplayComponent]
    });
    fixture = TestBed.createComponent(DzmtAutocompleteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
