import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideo2Component } from './section-video2.component';

describe('SectionVideo2Component', () => {
  let component: SectionVideo2Component;
  let fixture: ComponentFixture<SectionVideo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionVideo2Component]
    });
    fixture = TestBed.createComponent(SectionVideo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
