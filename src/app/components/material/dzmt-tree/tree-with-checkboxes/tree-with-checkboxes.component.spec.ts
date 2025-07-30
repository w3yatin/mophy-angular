import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeWithCheckboxesComponent } from './tree-with-checkboxes.component';

describe('TreeWithCheckboxesComponent', () => {
  let component: TreeWithCheckboxesComponent;
  let fixture: ComponentFixture<TreeWithCheckboxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeWithCheckboxesComponent]
    });
    fixture = TestBed.createComponent(TreeWithCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
