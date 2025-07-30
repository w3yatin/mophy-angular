import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardDbComponent } from './main-card-db.component';

describe('MainCardDbComponent', () => {
  let component: MainCardDbComponent;
  let fixture: ComponentFixture<MainCardDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCardDbComponent]
    });
    fixture = TestBed.createComponent(MainCardDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
