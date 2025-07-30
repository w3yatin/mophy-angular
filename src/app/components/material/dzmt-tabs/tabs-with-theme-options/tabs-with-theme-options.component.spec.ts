import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithThemeOptionsComponent } from './tabs-with-theme-options.component';

describe('TabsWithThemeOptionsComponent', () => {
  let component: TabsWithThemeOptionsComponent;
  let fixture: ComponentFixture<TabsWithThemeOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsWithThemeOptionsComponent]
    });
    fixture = TestBed.createComponent(TabsWithThemeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
