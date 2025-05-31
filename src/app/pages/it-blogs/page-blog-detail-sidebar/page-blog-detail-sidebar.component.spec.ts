import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogDetailSidebarComponent } from './page-blog-detail-sidebar.component';

describe('PageBlogDetailSidebarComponent', () => {
  let component: PageBlogDetailSidebarComponent;
  let fixture: ComponentFixture<PageBlogDetailSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBlogDetailSidebarComponent]
    });
    fixture = TestBed.createComponent(PageBlogDetailSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
