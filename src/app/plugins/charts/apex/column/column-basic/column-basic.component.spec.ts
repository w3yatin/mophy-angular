import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnBasicComponent } from './column-basic.component';

describe('ColumnBasicComponent', () => {
  let component: ColumnBasicComponent;
  let fixture: ComponentFixture<ColumnBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnBasicComponent]
    });
    fixture = TestBed.createComponent(ColumnBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
