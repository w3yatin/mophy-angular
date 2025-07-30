import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupSizeComponent } from './input-group-size.component';

describe('InputGroupSizeComponent', () => {
  let component: InputGroupSizeComponent;
  let fixture: ComponentFixture<InputGroupSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputGroupSizeComponent]
    });
    fixture = TestBed.createComponent(InputGroupSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
