import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSizingComponent } from './auto-sizing.component';

describe('AutoSizingComponent', () => {
  let component: AutoSizingComponent;
  let fixture: ComponentFixture<AutoSizingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSizingComponent]
    });
    fixture = TestBed.createComponent(AutoSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
