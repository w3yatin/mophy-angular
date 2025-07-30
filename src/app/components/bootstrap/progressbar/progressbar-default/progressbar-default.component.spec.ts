import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarDefaultComponent } from './progressbar-default.component';

describe('ProgressbarDefaultComponent', () => {
  let component: ProgressbarDefaultComponent;
  let fixture: ComponentFixture<ProgressbarDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressbarDefaultComponent]
    });
    fixture = TestBed.createComponent(ProgressbarDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
