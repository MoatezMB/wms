import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogGridComponent } from './page-blog-grid.component';

describe('PageBlogGridComponent', () => {
  let component: PageBlogGridComponent;
  let fixture: ComponentFixture<PageBlogGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBlogGridComponent]
    });
    fixture = TestBed.createComponent(PageBlogGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
