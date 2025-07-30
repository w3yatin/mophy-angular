import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtTreeComponent } from './dzmt-tree.component';

describe('DzmtTreeComponent', () => {
  let component: DzmtTreeComponent;
  let fixture: ComponentFixture<DzmtTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtTreeComponent]
    });
    fixture = TestBed.createComponent(DzmtTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
