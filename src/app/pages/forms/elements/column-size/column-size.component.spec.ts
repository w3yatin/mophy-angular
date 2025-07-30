import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnSizeComponent } from './column-size.component';

describe('ColumnSizeComponent', () => {
  let component: ColumnSizeComponent;
  let fixture: ComponentFixture<ColumnSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnSizeComponent]
    });
    fixture = TestBed.createComponent(ColumnSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
