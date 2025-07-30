import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatIconsComponent } from './flat-icons.component';

describe('FlatIconsComponent', () => {
  let component: FlatIconsComponent;
  let fixture: ComponentFixture<FlatIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlatIconsComponent]
    });
    fixture = TestBed.createComponent(FlatIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
