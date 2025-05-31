import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPortfolio1Component } from './section-portfolio1.component';

describe('SectionPortfolio1Component', () => {
  let component: SectionPortfolio1Component;
  let fixture: ComponentFixture<SectionPortfolio1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPortfolio1Component]
    });
    fixture = TestBed.createComponent(SectionPortfolio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
