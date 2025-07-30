import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLongCententComponent } from './modal-long-centent.component';

describe('ModalLongCententComponent', () => {
  let component: ModalLongCententComponent;
  let fixture: ComponentFixture<ModalLongCententComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLongCententComponent]
    });
    fixture = TestBed.createComponent(ModalLongCententComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
