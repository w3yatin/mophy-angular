import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarDifferentSizeComponent } from './progressbar-different-size.component';

describe('ProgressbarDifferentSizeComponent', () => {
  let component: ProgressbarDifferentSizeComponent;
  let fixture: ComponentFixture<ProgressbarDifferentSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressbarDifferentSizeComponent]
    });
    fixture = TestBed.createComponent(ProgressbarDifferentSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
