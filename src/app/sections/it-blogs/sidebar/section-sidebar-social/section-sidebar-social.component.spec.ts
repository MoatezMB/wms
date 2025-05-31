import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSidebarSocialComponent } from './section-sidebar-social.component';

describe('SectionSidebarSocialComponent', () => {
  let component: SectionSidebarSocialComponent;
  let fixture: ComponentFixture<SectionSidebarSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSidebarSocialComponent]
    });
    fixture = TestBed.createComponent(SectionSidebarSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
