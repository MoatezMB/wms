import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { innerPage } from 'src/app/globals/constants';
import { PageAboutUsComponent } from 'src/app/pages/company/page-about-us/page-about-us.component';
import { PageContactUsComponent } from 'src/app/pages/company/page-contact-us/page-contact-us.component';
import { PageFaqComponent } from 'src/app/pages/company/page-faq/page-faq.component';
import { PageGalleryComponent } from 'src/app/pages/company/page-gallery/page-gallery.component';
import { PageIconsComponent } from 'src/app/pages/company/page-icons/page-icons.component';
import { PagePricingComponent } from 'src/app/pages/company/page-pricing/page-pricing.component';
import { PageTeamComponent } from 'src/app/pages/company/page-team/page-team.component';
import { PageTestimonialsComponent } from 'src/app/pages/company/page-testimonials/page-testimonials.component';
import { PageWhyChooseUsComponent } from 'src/app/pages/company/page-why-choose-us/page-why-choose-us.component';

const routes: Routes = [
  { path: innerPage.ABOUT, component: PageAboutUsComponent },
  { path: innerPage.FAQ, component: PageFaqComponent },
  { path: innerPage.GALLERY, component: PageGalleryComponent },
  { path: innerPage.ICONS, component: PageIconsComponent },
  { path: innerPage.PRICING, component: PagePricingComponent },
  { path: innerPage.TEAM, component: PageTeamComponent },
  { path: innerPage.TESTIMONIALS, component: PageTestimonialsComponent },
  { path: innerPage.WHYCHOOSEUS, component: PageWhyChooseUsComponent },
  { path: innerPage.CONTACT, component: PageContactUsComponent }
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
export class CompanyRoutingModule { }
