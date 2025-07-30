import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveLineComponent } from './progressive-line.component';

describe('ProgressiveLineComponent', () => {
  let component: ProgressiveLineComponent;
  let fixture: ComponentFixture<ProgressiveLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressiveLineComponent]
    });
    fixture = TestBed.createComponent(ProgressiveLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
