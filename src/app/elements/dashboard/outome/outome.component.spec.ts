import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutomeComponent } from './outome.component';

describe('OutomeComponent', () => {
  let component: OutomeComponent;
  let fixture: ComponentFixture<OutomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutomeComponent]
    });
    fixture = TestBed.createComponent(OutomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
