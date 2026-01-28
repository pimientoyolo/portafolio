import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencieItem } from './experiencie-item';

describe('ExperiencieItem', () => {
  let component: ExperiencieItem;
  let fixture: ComponentFixture<ExperiencieItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencieItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencieItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
