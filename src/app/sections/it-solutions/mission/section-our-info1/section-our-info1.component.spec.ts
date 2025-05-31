import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOurInfo1Component } from './section-our-info1.component';

describe('SectionOurInfo1Component', () => {
  let component: SectionOurInfo1Component;
  let fixture: ComponentFixture<SectionOurInfo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionOurInfo1Component]
    });
    fixture = TestBed.createComponent(SectionOurInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
