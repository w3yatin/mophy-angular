import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGridListComponent } from './dynamic-grid-list.component';

describe('DynamicGridListComponent', () => {
  let component: DynamicGridListComponent;
  let fixture: ComponentFixture<DynamicGridListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicGridListComponent]
    });
    fixture = TestBed.createComponent(DynamicGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
