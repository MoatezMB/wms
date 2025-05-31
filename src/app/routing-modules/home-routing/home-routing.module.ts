import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homePage, innerPage } from 'src/app/globals/constants';

import { PageHome1Component } from 'src/app/pages/home/page-home1/page-home1.component';
import { PageHome2Component } from 'src/app/pages/home/page-home2/page-home2.component';
import { PageHome3Component } from 'src/app/pages/home/page-home3/page-home3.component';

const routes: Routes = [
  { path: '', component: PageHome1Component },
  { path: homePage.HOME1, component: PageHome1Component },
  { path: homePage.HOME2, component: PageHome2Component },
  { path: homePage.HOME3, component: PageHome3Component }
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
export class HomeRoutingModule { }
