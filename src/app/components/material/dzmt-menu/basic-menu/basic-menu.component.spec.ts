import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMenuComponent } from './basic-menu.component';

describe('BasicMenuComponent', () => {
  let component: BasicMenuComponent;
  let fixture: ComponentFixture<BasicMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicMenuComponent]
    });
    fixture = TestBed.createComponent(BasicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
