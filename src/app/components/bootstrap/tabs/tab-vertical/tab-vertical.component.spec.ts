import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabVerticalComponent } from './tab-vertical.component';

describe('TabVerticalComponent', () => {
  let component: TabVerticalComponent;
  let fixture: ComponentFixture<TabVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabVerticalComponent]
    });
    fixture = TestBed.createComponent(TabVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
