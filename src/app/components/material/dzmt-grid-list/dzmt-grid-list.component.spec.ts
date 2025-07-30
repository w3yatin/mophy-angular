import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtGridListComponent } from './dzmt-grid-list.component';

describe('DzmtGridListComponent', () => {
  let component: DzmtGridListComponent;
  let fixture: ComponentFixture<DzmtGridListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DzmtGridListComponent]
    });
    fixture = TestBed.createComponent(DzmtGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
