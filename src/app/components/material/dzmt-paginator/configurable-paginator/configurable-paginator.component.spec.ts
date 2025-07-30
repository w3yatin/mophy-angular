import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurablePaginatorComponent } from './configurable-paginator.component';

describe('ConfigurablePaginatorComponent', () => {
  let component: ConfigurablePaginatorComponent;
  let fixture: ComponentFixture<ConfigurablePaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurablePaginatorComponent]
    });
    fixture = TestBed.createComponent(ConfigurablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
