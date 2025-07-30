import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaObjectComponent } from './media-object.component';

describe('MediaObjectComponent', () => {
  let component: MediaObjectComponent;
  let fixture: ComponentFixture<MediaObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaObjectComponent]
    });
    fixture = TestBed.createComponent(MediaObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
