import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDistributedComponent } from './column-distributed.component';

describe('ColumnDistributedComponent', () => {
  let component: ColumnDistributedComponent;
  let fixture: ComponentFixture<ColumnDistributedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnDistributedComponent]
    });
    fixture = TestBed.createComponent(ColumnDistributedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
