import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteOptgroupComponent } from './dzmt-autocomplete-optgroup.component';

describe('DzmtAutocompleteOptgroupComponent', () => {
  let component: DzmtAutocompleteOptgroupComponent;
  let fixture: ComponentFixture<DzmtAutocompleteOptgroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtAutocompleteOptgroupComponent]
    });
    fixture = TestBed.createComponent(DzmtAutocompleteOptgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
