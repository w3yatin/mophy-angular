import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeWithDynamicDataComponent } from './tree-with-dynamic-data.component';

describe('TreeWithDynamicDataComponent', () => {
  let component: TreeWithDynamicDataComponent;
  let fixture: ComponentFixture<TreeWithDynamicDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeWithDynamicDataComponent]
    });
    fixture = TestBed.createComponent(TreeWithDynamicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
