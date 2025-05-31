import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutCompany3Component } from './section-about-company3.component';

describe('SectionAboutCompany3Component', () => {
  let component: SectionAboutCompany3Component;
  let fixture: ComponentFixture<SectionAboutCompany3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAboutCompany3Component]
    });
    fixture = TestBed.createComponent(SectionAboutCompany3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
