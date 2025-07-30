import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithCustomLabelTemplateComponent } from './tabs-with-custom-label-template.component';

describe('TabsWithCustomLabelTemplateComponent', () => {
  let component: TabsWithCustomLabelTemplateComponent;
  let fixture: ComponentFixture<TabsWithCustomLabelTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsWithCustomLabelTemplateComponent]
    });
    fixture = TestBed.createComponent(TabsWithCustomLabelTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
