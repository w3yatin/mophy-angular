import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostContentComponent } from './profile-post-content.component';

describe('ProfilePostContentComponent', () => {
  let component: ProfilePostContentComponent;
  let fixture: ComponentFixture<ProfilePostContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePostContentComponent]
    });
    fixture = TestBed.createComponent(ProfilePostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
