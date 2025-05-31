import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCaseStudy2Component } from './section-case-study2.component';

describe('SectionCaseStudy2Component', () => {
  let component: SectionCaseStudy2Component;
  let fixture: ComponentFixture<SectionCaseStudy2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCaseStudy2Component]
    });
    fixture = TestBed.createComponent(SectionCaseStudy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
