import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarImagesComponent } from './bar-images.component';

describe('BarImagesComponent', () => {
  let component: BarImagesComponent;
  let fixture: ComponentFixture<BarImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarImagesComponent]
    });
    fixture = TestBed.createComponent(BarImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
