import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhyChooseUs1Component } from './section-why-choose-us1.component';

describe('SectionWhyChooseUs1Component', () => {
  let component: SectionWhyChooseUs1Component;
  let fixture: ComponentFixture<SectionWhyChooseUs1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionWhyChooseUs1Component]
    });
    fixture = TestBed.createComponent(SectionWhyChooseUs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
