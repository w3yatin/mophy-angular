import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorActivityComponent } from './visitor-activity.component';

describe('VisitorActivityComponent', () => {
  let component: VisitorActivityComponent;
  let fixture: ComponentFixture<VisitorActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorActivityComponent]
    });
    fixture = TestBed.createComponent(VisitorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
