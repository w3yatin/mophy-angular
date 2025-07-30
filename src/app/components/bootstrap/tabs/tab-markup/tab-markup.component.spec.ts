import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMarkupComponent } from './tab-markup.component';

describe('TabMarkupComponent', () => {
  let component: TabMarkupComponent;
  let fixture: ComponentFixture<TabMarkupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabMarkupComponent]
    });
    fixture = TestBed.createComponent(TabMarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
