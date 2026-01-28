import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3TypingSkillItem } from './h3-typing-skill-item';

describe('H3TypingSkillItem', () => {
  let component: H3TypingSkillItem;
  let fixture: ComponentFixture<H3TypingSkillItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H3TypingSkillItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H3TypingSkillItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
