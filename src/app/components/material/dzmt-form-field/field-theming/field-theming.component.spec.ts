import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldThemingComponent } from './field-theming.component';

describe('FieldThemingComponent', () => {
  let component: FieldThemingComponent;
  let fixture: ComponentFixture<FieldThemingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldThemingComponent]
    });
    fixture = TestBed.createComponent(FieldThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
