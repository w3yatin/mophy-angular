import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWithIconsComponent } from './menu-with-icons.component';

describe('MenuWithIconsComponent', () => {
  let component: MenuWithIconsComponent;
  let fixture: ComponentFixture<MenuWithIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuWithIconsComponent]
    });
    fixture = TestBed.createComponent(MenuWithIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
