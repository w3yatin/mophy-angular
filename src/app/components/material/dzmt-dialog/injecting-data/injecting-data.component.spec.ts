import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectingDataComponent } from './injecting-data.component';

describe('InjectingDataComponent', () => {
  let component: InjectingDataComponent;
  let fixture: ComponentFixture<InjectingDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjectingDataComponent]
    });
    fixture = TestBed.createComponent(InjectingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
