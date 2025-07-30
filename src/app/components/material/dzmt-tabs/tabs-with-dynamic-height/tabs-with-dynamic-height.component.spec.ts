import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithDynamicHeightComponent } from './tabs-with-dynamic-height.component';

describe('TabsWithDynamicHeightComponent', () => {
  let component: TabsWithDynamicHeightComponent;
  let fixture: ComponentFixture<TabsWithDynamicHeightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsWithDynamicHeightComponent]
    });
    fixture = TestBed.createComponent(TabsWithDynamicHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
