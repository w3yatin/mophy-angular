import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAreaStackedComponent } from './area-area-stacked.component';

describe('AreaAreaStackedComponent', () => {
  let component: AreaAreaStackedComponent;
  let fixture: ComponentFixture<AreaAreaStackedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaAreaStackedComponent]
    });
    fixture = TestBed.createComponent(AreaAreaStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
