import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeCardComponent } from './orange-card.component';

describe('OrangeCardComponent', () => {
  let component: OrangeCardComponent;
  let fixture: ComponentFixture<OrangeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrangeCardComponent]
    });
    fixture = TestBed.createComponent(OrangeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
