import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRowTableComponent } from './footer-row-table.component';

describe('FooterRowTableComponent', () => {
  let component: FooterRowTableComponent;
  let fixture: ComponentFixture<FooterRowTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterRowTableComponent]
    });
    fixture = TestBed.createComponent(FooterRowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
