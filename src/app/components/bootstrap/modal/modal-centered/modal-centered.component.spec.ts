import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCenteredComponent } from './modal-centered.component';

describe('ModalCenteredComponent', () => {
  let component: ModalCenteredComponent;
  let fixture: ComponentFixture<ModalCenteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCenteredComponent]
    });
    fixture = TestBed.createComponent(ModalCenteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
