import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPayComponent } from './recent-pay.component';

describe('RecentPayComponent', () => {
  let component: RecentPayComponent;
  let fixture: ComponentFixture<RecentPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentPayComponent]
    });
    fixture = TestBed.createComponent(RecentPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
