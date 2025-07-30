import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtExpansionComponent } from './dzmt-expansion.component';

describe('DzmtExpansionComponent', () => {
  let component: DzmtExpansionComponent;
  let fixture: ComponentFixture<DzmtExpansionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtExpansionComponent]
    });
    fixture = TestBed.createComponent(DzmtExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
