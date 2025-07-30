import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGridComponent } from './modal-grid.component';

describe('ModalGridComponent', () => {
  let component: ModalGridComponent;
  let fixture: ComponentFixture<ModalGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGridComponent]
    });
    fixture = TestBed.createComponent(ModalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
