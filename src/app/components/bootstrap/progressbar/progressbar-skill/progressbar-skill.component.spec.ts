import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarSkillComponent } from './progressbar-skill.component';

describe('ProgressbarSkillComponent', () => {
  let component: ProgressbarSkillComponent;
  let fixture: ComponentFixture<ProgressbarSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressbarSkillComponent]
    });
    fixture = TestBed.createComponent(ProgressbarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
