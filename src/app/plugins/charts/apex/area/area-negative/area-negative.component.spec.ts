import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaNegativeComponent } from './area-negative.component';

describe('AreaNegativeComponent', () => {
  let component: AreaNegativeComponent;
  let fixture: ComponentFixture<AreaNegativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaNegativeComponent]
    });
    fixture = TestBed.createComponent(AreaNegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
