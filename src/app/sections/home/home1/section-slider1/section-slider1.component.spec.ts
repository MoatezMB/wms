import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider1Component } from './section-slider1.component';

describe('SectionSlider1Component', () => {
  let component: SectionSlider1Component;
  let fixture: ComponentFixture<SectionSlider1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSlider1Component]
    });
    fixture = TestBed.createComponent(SectionSlider1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
