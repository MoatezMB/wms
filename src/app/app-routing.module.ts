import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRoutingModule } from './routing-modules/home-routing/home-routing.module';
import { CompanyRoutingModule } from './routing-modules/company-routing/company-routing.module';
import { ItSolutionsRoutingModule } from './routing-modules/it-solutions-routing/it-solutions-routing.module';
import { ItBlogsRoutingModule } from './routing-modules/it-blogs-routing/it-blogs-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { InnerPagesLayoutComponent } from './layouts/inner-pages-layout/inner-pages-layout.component';
import { siteModule } from './globals/constants';

const routes: Routes = [
  {
    path: siteModule.HOME,
    component: HomeLayoutComponent,
    loadChildren: () => HomeRoutingModule
  },
  {
    path: siteModule.COMPANY,
    component: InnerPagesLayoutComponent,
    loadChildren: () => CompanyRoutingModule
  },
  {
    path: siteModule.ITSOLUTIONS,
    component: InnerPagesLayoutComponent,
    loadChildren: () => ItSolutionsRoutingModule
  },
  {
    path: siteModule.ITBLOGS,
    component: InnerPagesLayoutComponent,
    loadChildren: () => ItBlogsRoutingModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
