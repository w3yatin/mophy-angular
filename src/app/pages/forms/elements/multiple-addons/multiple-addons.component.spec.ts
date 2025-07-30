import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAddonsComponent } from './multiple-addons.component';

describe('MultipleAddonsComponent', () => {
  let component: MultipleAddonsComponent;
  let fixture: ComponentFixture<MultipleAddonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleAddonsComponent]
    });
    fixture = TestBed.createComponent(MultipleAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
