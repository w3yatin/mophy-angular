import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTooltipComponent } from './basic-tooltip.component';

describe('BasicTooltipComponent', () => {
  let component: BasicTooltipComponent;
  let fixture: ComponentFixture<BasicTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicTooltipComponent]
    });
    fixture = TestBed.createComponent(BasicTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
