import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogListSidebarComponent } from './page-blog-list-sidebar.component';

describe('PageBlogListSidebarComponent', () => {
  let component: PageBlogListSidebarComponent;
  let fixture: ComponentFixture<PageBlogListSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBlogListSidebarComponent]
    });
    fixture = TestBed.createComponent(PageBlogListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
