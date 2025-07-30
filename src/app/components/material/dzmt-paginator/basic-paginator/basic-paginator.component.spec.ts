import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPaginatorComponent } from './basic-paginator.component';

describe('BasicPaginatorComponent', () => {
  let component: BasicPaginatorComponent;
  let fixture: ComponentFixture<BasicPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicPaginatorComponent]
    });
    fixture = TestBed.createComponent(BasicPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
