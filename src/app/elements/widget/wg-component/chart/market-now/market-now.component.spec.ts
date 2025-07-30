import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketNowComponent } from './market-now.component';

describe('MarketNowComponent', () => {
  let component: MarketNowComponent;
  let fixture: ComponentFixture<MarketNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketNowComponent]
    });
    fixture = TestBed.createComponent(MarketNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
