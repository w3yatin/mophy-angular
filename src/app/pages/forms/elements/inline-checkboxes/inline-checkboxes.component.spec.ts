import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineCheckboxesComponent } from './inline-checkboxes.component';

describe('InlineCheckboxesComponent', () => {
  let component: InlineCheckboxesComponent;
  let fixture: ComponentFixture<InlineCheckboxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineCheckboxesComponent]
    });
    fixture = TestBed.createComponent(InlineCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
