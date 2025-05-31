import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogDetailComponent } from './page-blog-detail.component';

describe('PageBlogDetailComponent', () => {
  let component: PageBlogDetailComponent;
  let fixture: ComponentFixture<PageBlogDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBlogDetailComponent]
    });
    fixture = TestBed.createComponent(PageBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
