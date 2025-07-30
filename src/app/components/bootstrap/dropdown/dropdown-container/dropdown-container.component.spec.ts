import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownContainerComponent } from './dropdown-container.component';

describe('DropdownContainerComponent', () => {
  let component: DropdownContainerComponent;
  let fixture: ComponentFixture<DropdownContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownContainerComponent]
    });
    fixture = TestBed.createComponent(DropdownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
