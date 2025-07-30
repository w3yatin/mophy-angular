import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferProgressBarComponent } from './buffer-progress-bar.component';

describe('BufferProgressBarComponent', () => {
  let component: BufferProgressBarComponent;
  let fixture: ComponentFixture<BufferProgressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BufferProgressBarComponent]
    });
    fixture = TestBed.createComponent(BufferProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
