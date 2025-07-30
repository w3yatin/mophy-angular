import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Message1Component } from './message-1.component';

describe('Message1Component', () => {
  let component: Message1Component;
  let fixture: ComponentFixture<Message1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Message1Component]
    });
    fixture = TestBed.createComponent(Message1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
