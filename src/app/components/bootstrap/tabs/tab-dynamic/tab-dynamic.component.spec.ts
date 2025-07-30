import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDynamicComponent } from './tab-dynamic.component';

describe('TabDynamicComponent', () => {
  let component: TabDynamicComponent;
  let fixture: ComponentFixture<TabDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabDynamicComponent]
    });
    fixture = TestBed.createComponent(TabDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
