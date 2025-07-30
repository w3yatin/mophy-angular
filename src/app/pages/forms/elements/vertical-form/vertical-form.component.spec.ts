import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalFormComponent } from './vertical-form.component';

describe('VerticalFormComponent', () => {
  let component: VerticalFormComponent;
  let fixture: ComponentFixture<VerticalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalFormComponent]
    });
    fixture = TestBed.createComponent(VerticalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
