import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCaseStudy1Component } from './section-case-study1.component';

describe('SectionCaseStudy1Component', () => {
  let component: SectionCaseStudy1Component;
  let fixture: ComponentFixture<SectionCaseStudy1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCaseStudy1Component]
    });
    fixture = TestBed.createComponent(SectionCaseStudy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
