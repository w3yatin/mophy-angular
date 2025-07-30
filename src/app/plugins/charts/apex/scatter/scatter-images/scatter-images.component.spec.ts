import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterImagesComponent } from './scatter-images.component';

describe('ScatterImagesComponent', () => {
  let component: ScatterImagesComponent;
  let fixture: ComponentFixture<ScatterImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScatterImagesComponent]
    });
    fixture = TestBed.createComponent(ScatterImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
