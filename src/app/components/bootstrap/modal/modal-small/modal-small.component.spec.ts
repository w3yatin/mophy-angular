import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSmallComponent } from './modal-small.component';

describe('ModalSmallComponent', () => {
  let component: ModalSmallComponent;
  let fixture: ComponentFixture<ModalSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSmallComponent]
    });
    fixture = TestBed.createComponent(ModalSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
