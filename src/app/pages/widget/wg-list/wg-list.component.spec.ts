import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgListComponent } from './wg-list.component';

describe('WgListComponent', () => {
  let component: WgListComponent;
  let fixture: ComponentFixture<WgListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WgListComponent]
    });
    fixture = TestBed.createComponent(WgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
