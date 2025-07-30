import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProduct1Component } from './top-product-1.component';

describe('TopProduct1Component', () => {
  let component: TopProduct1Component;
  let fixture: ComponentFixture<TopProduct1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopProduct1Component]
    });
    fixture = TestBed.createComponent(TopProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
