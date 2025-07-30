import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAnimationsComponent } from './tab-group-animations.component';

describe('TabGroupAnimationsComponent', () => {
  let component: TabGroupAnimationsComponent;
  let fixture: ComponentFixture<TabGroupAnimationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupAnimationsComponent]
    });
    fixture = TestBed.createComponent(TabGroupAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
