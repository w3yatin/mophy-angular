import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteFirstActiveComponent } from './dzmt-autocomplete-first-active.component';

describe('DzmtAutocompleteFirstActiveComponent', () => {
  let component: DzmtAutocompleteFirstActiveComponent;
  let fixture: ComponentFixture<DzmtAutocompleteFirstActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtAutocompleteFirstActiveComponent]
    });
    fixture = TestBed.createComponent(DzmtAutocompleteFirstActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
