import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSidebarPostsComponent } from './section-sidebar-posts.component';

describe('SectionSidebarPostsComponent', () => {
  let component: SectionSidebarPostsComponent;
  let fixture: ComponentFixture<SectionSidebarPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSidebarPostsComponent]
    });
    fixture = TestBed.createComponent(SectionSidebarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
