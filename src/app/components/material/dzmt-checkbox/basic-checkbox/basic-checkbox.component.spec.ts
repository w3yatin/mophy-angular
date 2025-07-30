import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCheckboxComponent } from './basic-checkbox.component';

describe('BasicCheckboxComponent', () => {
  let component: BasicCheckboxComponent;
  let fixture: ComponentFixture<BasicCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicCheckboxComponent]
    });
    fixture = TestBed.createComponent(BasicCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
