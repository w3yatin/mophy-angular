import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStatisticComponent } from './details-statistic.component';

describe('DetailsStatisticComponent', () => {
  let component: DetailsStatisticComponent;
  let fixture: ComponentFixture<DetailsStatisticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsStatisticComponent]
    });
    fixture = TestBed.createComponent(DetailsStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
