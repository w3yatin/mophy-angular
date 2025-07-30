import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickComboComponent } from './candlestick-combo.component';

describe('CandlestickComboComponent', () => {
  let component: CandlestickComboComponent;
  let fixture: ComponentFixture<CandlestickComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandlestickComboComponent]
    });
    fixture = TestBed.createComponent(CandlestickComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
