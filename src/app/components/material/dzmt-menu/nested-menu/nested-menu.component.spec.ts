import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedMenuComponent } from './nested-menu.component';

describe('NestedMenuComponent', () => {
  let component: NestedMenuComponent;
  let fixture: ComponentFixture<NestedMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedMenuComponent]
    });
    fixture = TestBed.createComponent(NestedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
