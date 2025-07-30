import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSidbarComponent } from './email-sidbar.component';

describe('EmailSidbarComponent', () => {
  let component: EmailSidbarComponent;
  let fixture: ComponentFixture<EmailSidbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailSidbarComponent]
    });
    fixture = TestBed.createComponent(EmailSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
