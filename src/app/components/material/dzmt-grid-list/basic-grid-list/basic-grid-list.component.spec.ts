import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGridListComponent } from './basic-grid-list.component';

describe('BasicGridListComponent', () => {
  let component: BasicGridListComponent;
  let fixture: ComponentFixture<BasicGridListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicGridListComponent]
    });
    fixture = TestBed.createComponent(BasicGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
