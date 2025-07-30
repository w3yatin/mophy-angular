import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailContentComponent } from './post-detail-content.component';

describe('PostDetailContentComponent', () => {
  let component: PostDetailContentComponent;
  let fixture: ComponentFixture<PostDetailContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailContentComponent]
    });
    fixture = TestBed.createComponent(PostDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
