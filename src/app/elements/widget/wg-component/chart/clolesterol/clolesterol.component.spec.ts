import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClolesterolComponent } from './clolesterol.component';

describe('ClolesterolComponent', () => {
  let component: ClolesterolComponent;
  let fixture: ComponentFixture<ClolesterolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClolesterolComponent]
    });
    fixture = TestBed.createComponent(ClolesterolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
