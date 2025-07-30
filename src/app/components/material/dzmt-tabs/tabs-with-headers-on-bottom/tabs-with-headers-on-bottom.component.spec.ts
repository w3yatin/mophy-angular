import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithHeadersOnBottomComponent } from './tabs-with-headers-on-bottom.component';

describe('TabsWithHeadersOnBottomComponent', () => {
  let component: TabsWithHeadersOnBottomComponent;
  let fixture: ComponentFixture<TabsWithHeadersOnBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsWithHeadersOnBottomComponent]
    });
    fixture = TestBed.createComponent(TabsWithHeadersOnBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
