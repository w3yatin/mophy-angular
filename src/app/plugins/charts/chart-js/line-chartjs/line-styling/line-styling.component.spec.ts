import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineStylingComponent } from './line-styling.component';

describe('LineStylingComponent', () => {
  let component: LineStylingComponent;
  let fixture: ComponentFixture<LineStylingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineStylingComponent]
    });
    fixture = TestBed.createComponent(LineStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
