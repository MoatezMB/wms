import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCaseStudy3Component } from './section-case-study3.component';

describe('SectionCaseStudy3Component', () => {
  let component: SectionCaseStudy3Component;
  let fixture: ComponentFixture<SectionCaseStudy3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCaseStudy3Component]
    });
    fixture = TestBed.createComponent(SectionCaseStudy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
