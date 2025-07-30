import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsStackedComponent } from './chips-stacked.component';

describe('ChipsStackedComponent', () => {
  let component: ChipsStackedComponent;
  let fixture: ComponentFixture<ChipsStackedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsStackedComponent]
    });
    fixture = TestBed.createComponent(ChipsStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
