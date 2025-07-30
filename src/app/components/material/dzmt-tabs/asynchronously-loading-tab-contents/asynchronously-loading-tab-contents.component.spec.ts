import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronouslyLoadingTabContentsComponent } from './asynchronously-loading-tab-contents.component';

describe('AsynchronouslyLoadingTabContentsComponent', () => {
  let component: AsynchronouslyLoadingTabContentsComponent;
  let fixture: ComponentFixture<AsynchronouslyLoadingTabContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsynchronouslyLoadingTabContentsComponent]
    });
    fixture = TestBed.createComponent(AsynchronouslyLoadingTabContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
