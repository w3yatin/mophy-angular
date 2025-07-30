import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSizeComponent } from './input-size.component';

describe('InputSizeComponent', () => {
  let component: InputSizeComponent;
  let fixture: ComponentFixture<InputSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSizeComponent]
    });
    fixture = TestBed.createComponent(InputSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
