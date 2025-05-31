import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlogGridComponent } from 'src/app/pages/it-blogs/page-blog-grid/page-blog-grid.component';
import { PageBlogListSidebarComponent } from 'src/app/pages/it-blogs/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageBlogDetailSidebarComponent } from 'src/app/pages/it-blogs/page-blog-detail-sidebar/page-blog-detail-sidebar.component';
import { PageBlogDetailComponent } from 'src/app/pages/it-blogs/page-blog-detail/page-blog-detail.component';
import { innerPage } from 'src/app/globals/constants';

const routes: Routes = [
  { path: innerPage.BLOGS_GRID, component: PageBlogGridComponent },
  { path: innerPage.BLOGS_LIST_SIDEBAR, component: PageBlogListSidebarComponent },
  { path: innerPage.BLOGS_DETAIL_SIDEBAR, component: PageBlogDetailSidebarComponent },
  { path: innerPage.BLOGS_DETAIL, component: PageBlogDetailComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItBlogsRoutingModule { }
