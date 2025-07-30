import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarAreaComponent } from './polar-area.component';

describe('PolarAreaComponent', () => {
  let component: PolarAreaComponent;
  let fixture: ComponentFixture<PolarAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolarAreaComponent]
    });
    fixture = TestBed.createComponent(PolarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
