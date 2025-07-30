import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosizeSidenavComponent } from './autosize-sidenav.component';

describe('AutosizeSidenavComponent', () => {
  let component: AutosizeSidenavComponent;
  let fixture: ComponentFixture<AutosizeSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutosizeSidenavComponent]
    });
    fixture = TestBed.createComponent(AutosizeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
