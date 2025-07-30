import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithContentLoadedLazilyComponent } from './tabs-with-content-loaded-lazily.component';

describe('TabsWithContentLoadedLazilyComponent', () => {
  let component: TabsWithContentLoadedLazilyComponent;
  let fixture: ComponentFixture<TabsWithContentLoadedLazilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsWithContentLoadedLazilyComponent]
    });
    fixture = TestBed.createComponent(TabsWithContentLoadedLazilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
