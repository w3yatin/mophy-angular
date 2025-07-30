import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSizeComponent } from './select-size.component';

describe('SelectSizeComponent', () => {
  let component: SelectSizeComponent;
  let fixture: ComponentFixture<SelectSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSizeComponent]
    });
    fixture = TestBed.createComponent(SelectSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
