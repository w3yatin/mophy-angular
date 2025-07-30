import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithSelectionComponent } from './list-with-selection.component';

describe('ListWithSelectionComponent', () => {
  let component: ListWithSelectionComponent;
  let fixture: ComponentFixture<ListWithSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWithSelectionComponent]
    });
    fixture = TestBed.createComponent(ListWithSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
