import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProduct2Component } from './top-product-2.component';

describe('TopProduct2Component', () => {
  let component: TopProduct2Component;
  let fixture: ComponentFixture<TopProduct2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopProduct2Component]
    });
    fixture = TestBed.createComponent(TopProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
