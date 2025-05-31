import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestimonials3Component } from './section-testimonials3.component';

describe('SectionTestimonials3Component', () => {
  let component: SectionTestimonials3Component;
  let fixture: ComponentFixture<SectionTestimonials3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionTestimonials3Component]
    });
    fixture = TestBed.createComponent(SectionTestimonials3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
