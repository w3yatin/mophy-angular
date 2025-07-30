import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteComponent } from './dzmt-autocomplete.component';

describe('DzmtAutocompleteComponent', () => {
  let component: DzmtAutocompleteComponent;
  let fixture: ComponentFixture<DzmtAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtAutocompleteComponent]
    });
    fixture = TestBed.createComponent(DzmtAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
