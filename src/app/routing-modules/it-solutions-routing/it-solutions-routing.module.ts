import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { innerPage } from 'src/app/globals/constants';
import { PageMissionComponent } from 'src/app/pages/it-solutions/page-mission/page-mission.component';
import { PagePortfolioDetailComponent } from 'src/app/pages/it-solutions/page-portfolio-detail/page-portfolio-detail.component';
import { PagePortfolio1Component } from 'src/app/pages/it-solutions/page-portfolio1/page-portfolio1.component';
import { PagePortfolio2Component } from 'src/app/pages/it-solutions/page-portfolio2/page-portfolio2.component';
import { PageServiceDetailComponent } from 'src/app/pages/it-solutions/page-service-detail/page-service-detail.component';
import { PageServicesComponent } from 'src/app/pages/it-solutions/page-services/page-services.component';

const routes: Routes = [
  { path: innerPage.MISSION, component: PageMissionComponent },
  { path: innerPage.SERVICES, component: PageServicesComponent },
  { path: innerPage.SERVICES_DETAIL, component: PageServiceDetailComponent },
  { path: innerPage.PORTFOLIO1, component: PagePortfolio1Component },
  { path: innerPage.PORTFOLIO2, component: PagePortfolio2Component },
  { path: innerPage.PORTFOLIO_DETAIL, component: PagePortfolioDetailComponent }
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
export class ItSolutionsRoutingModule { }
