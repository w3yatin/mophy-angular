import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeadComponent } from './content-head.component';

describe('ContentHeadComponent', () => {
  let component: ContentHeadComponent;
  let fixture: ComponentFixture<ContentHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentHeadComponent]
    });
    fixture = TestBed.createComponent(ContentHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
