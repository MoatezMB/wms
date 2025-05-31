import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutCompany4Component } from './section-about-company4.component';

describe('SectionAboutCompany4Component', () => {
  let component: SectionAboutCompany4Component;
  let fixture: ComponentFixture<SectionAboutCompany4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAboutCompany4Component]
    });
    fixture = TestBed.createComponent(SectionAboutCompany4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
