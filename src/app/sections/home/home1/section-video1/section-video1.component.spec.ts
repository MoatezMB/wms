import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideo1Component } from './section-video1.component';

describe('SectionVideo1Component', () => {
  let component: SectionVideo1Component;
  let fixture: ComponentFixture<SectionVideo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionVideo1Component]
    });
    fixture = TestBed.createComponent(SectionVideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
