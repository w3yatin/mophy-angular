import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelBottomPositionComponent } from './label-bottom-position.component';

describe('LabelBottomPositionComponent', () => {
  let component: LabelBottomPositionComponent;
  let fixture: ComponentFixture<LabelBottomPositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelBottomPositionComponent]
    });
    fixture = TestBed.createComponent(LabelBottomPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
