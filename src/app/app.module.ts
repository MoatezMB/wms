import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHome1Component } from './pages/home/page-home1/page-home1.component';
import { PageHome2Component } from './pages/home/page-home2/page-home2.component';
import { PageHome3Component } from './pages/home/page-home3/page-home3.component';
import { PageAboutUsComponent } from './pages/company/page-about-us/page-about-us.component';
import { PageFaqComponent } from './pages/company/page-faq/page-faq.component';
import { PageGalleryComponent } from './pages/company/page-gallery/page-gallery.component';
import { PageIconsComponent } from './pages/company/page-icons/page-icons.component';
import { PageTestimonialsComponent } from './pages/company/page-testimonials/page-testimonials.component';
import { PageWhyChooseUsComponent } from './pages/company/page-why-choose-us/page-why-choose-us.component';
import { PagePricingComponent } from './pages/company/page-pricing/page-pricing.component';
import { PageTeamComponent } from './pages/company/page-team/page-team.component';
import { PageMissionComponent } from './pages/it-solutions/page-mission/page-mission.component';
import { PageServicesComponent } from './pages/it-solutions/page-services/page-services.component';
import { PageServiceDetailComponent } from './pages/it-solutions/page-service-detail/page-service-detail.component';
import { PagePortfolio1Component } from './pages/it-solutions/page-portfolio1/page-portfolio1.component';
import { PagePortfolio2Component } from './pages/it-solutions/page-portfolio2/page-portfolio2.component';
import { PagePortfolioDetailComponent } from './pages/it-solutions/page-portfolio-detail/page-portfolio-detail.component';
import { PageBlogGridComponent } from './pages/it-blogs/page-blog-grid/page-blog-grid.component';
import { PageBlogListSidebarComponent } from './pages/it-blogs/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageBlogDetailSidebarComponent } from './pages/it-blogs/page-blog-detail-sidebar/page-blog-detail-sidebar.component';
import { PageBlogDetailComponent } from './pages/it-blogs/page-blog-detail/page-blog-detail.component';
import { PageContactUsComponent } from './pages/company/page-contact-us/page-contact-us.component';
import { LoaderComponent } from './elements/loader/loader.component';
import { Header3Component } from './sections/common/header/header3/header3.component';
import { Header2Component } from './sections/common/header/header2/header2.component';
import { Header1Component } from './sections/common/header/header1/header1.component';
import { Footer1Component } from './sections/common/footer/footer1/footer1.component';
import { SectionSlider1Component } from './sections/home/home1/section-slider1/section-slider1.component';
import { SectionServices1Component } from './sections/home/home1/section-services1/section-services1.component';
import { SectionAboutCompany1Component } from './sections/home/home1/section-about-company1/section-about-company1.component';
import { SectionCounter1Component } from './sections/home/home1/section-counter1/section-counter1.component';
import { SectionWhyChooseUs1Component } from './sections/home/home1/section-why-choose-us1/section-why-choose-us1.component';
import { SectionVideo1Component } from './sections/home/home1/section-video1/section-video1.component';
import { SectionPricing1Component } from './sections/home/home1/section-pricing1/section-pricing1.component';
import { SectionClients1Component } from './sections/home/home1/section-clients1/section-clients1.component';
import { SectionCaseStudy1Component } from './sections/home/home1/section-case-study1/section-case-study1.component';
import { SectionTestimonials1Component } from './sections/home/home1/section-testimonials1/section-testimonials1.component';
import { SectionBlogs1Component } from './sections/home/home1/section-blogs1/section-blogs1.component';
import { SectionSlider2Component } from './sections/home/home2/section-slider2/section-slider2.component';
import { SectionAboutCompany2Component } from './sections/home/home2/section-about-company2/section-about-company2.component';
import { SectionServices2Component } from './sections/home/home2/section-services2/section-services2.component';
import { SectionClients2Component } from './sections/home/home2/section-clients2/section-clients2.component';
import { SectionCaseStudy2Component } from './sections/home/home2/section-case-study2/section-case-study2.component';
import { SectionTeam1Component } from './sections/home/home2/section-team1/section-team1.component';
import { SectionVideo2Component } from './sections/home/home2/section-video2/section-video2.component';
import { SectionAboutCompany3Component } from './sections/home/home2/section-about-company3/section-about-company3.component';
import { SectionTestimonials2Component } from './sections/home/home2/section-testimonials2/section-testimonials2.component';
import { SectionSlider3Component } from './sections/home/home3/section-slider3/section-slider3.component';
import { SectionServices3Component } from './sections/home/home3/section-services3/section-services3.component';
import { SectionPortfolio1Component } from './sections/home/home3/section-portfolio1/section-portfolio1.component';
import { SectionTeam2Component } from './sections/home/home3/section-team2/section-team2.component';
import { SectionClients3Component } from './sections/home/home3/section-clients3/section-clients3.component';
import { SectionTestimonials3Component } from './sections/home/home3/section-testimonials3/section-testimonials3.component';
import { BannerComponent } from './sections/common/banner/banner.component';
import { InnerPagesLayoutComponent } from './layouts/inner-pages-layout/inner-pages-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { SectionVideo3Component } from './sections/company/pricing/section-video3/section-video3.component';
import { SectionAboutCompany4Component } from './sections/company/why-choose-us/section-about-company4/section-about-company4.component';
import { SectionOurInfo1Component } from './sections/it-solutions/mission/section-our-info1/section-our-info1.component';
import { SectionCaseStudy3Component } from './sections/it-solutions/portfolio/section-case-study3/section-case-study3.component';
import { SectionSidebarComponent } from './sections/it-blogs/sidebar/section-sidebar/section-sidebar.component';
import { SectionSidebarSearchComponent } from './sections/it-blogs/sidebar/section-sidebar-search/section-sidebar-search.component';
import { SectionSidebarCategoriesComponent } from './sections/it-blogs/sidebar/section-sidebar-categories/section-sidebar-categories.component';
import { SectionSidebarPostsComponent } from './sections/it-blogs/sidebar/section-sidebar-posts/section-sidebar-posts.component';
import { SectionSidebarGalleryComponent } from './sections/it-blogs/sidebar/section-sidebar-gallery/section-sidebar-gallery.component';
import { SectionSidebarSocialComponent } from './sections/it-blogs/sidebar/section-sidebar-social/section-sidebar-social.component';
import { SectionLatestNewsComponent } from './sections/it-blogs/blog/section-latest-news/section-latest-news.component';
import { SectionCommentsComponent } from './sections/it-blogs/blog/section-comments/section-comments.component';
import { SectionLeaveAReplyComponent } from './sections/it-blogs/blog/section-leave-a-reply/section-leave-a-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHome1Component,
    PageHome2Component,
    PageHome3Component,
    PageAboutUsComponent,
    PageFaqComponent,
    PageGalleryComponent,
    PageIconsComponent,
    PageTestimonialsComponent,
    PageWhyChooseUsComponent,
    PagePricingComponent,
    PageTeamComponent,
    PageMissionComponent,
    PageServicesComponent,
    PageServiceDetailComponent,
    PagePortfolio1Component,
    PagePortfolio2Component,
    PagePortfolioDetailComponent,
    PageBlogGridComponent,
    PageBlogListSidebarComponent,
    PageBlogDetailSidebarComponent,
    PageBlogDetailComponent,
    PageContactUsComponent,
    LoaderComponent,
    Header3Component,
    Header2Component,
    Header1Component,
    Footer1Component,
    SectionSlider1Component,
    SectionServices1Component,
    SectionAboutCompany1Component,
    SectionCounter1Component,
    SectionWhyChooseUs1Component,
    SectionVideo1Component,
    SectionPricing1Component,
    SectionClients1Component,
    SectionCaseStudy1Component,
    SectionTestimonials1Component,
    SectionBlogs1Component,
    SectionSlider2Component,
    SectionAboutCompany2Component,
    SectionServices2Component,
    SectionClients2Component,
    SectionCaseStudy2Component,
    SectionTeam1Component,
    SectionVideo2Component,
    SectionAboutCompany3Component,
    SectionTestimonials2Component,
    SectionSlider3Component,
    SectionServices3Component,
    SectionPortfolio1Component,
    SectionTeam2Component,
    SectionClients3Component,
    SectionTestimonials3Component,
    BannerComponent,
    InnerPagesLayoutComponent,
    HomeLayoutComponent,
    SectionVideo3Component,
    SectionAboutCompany4Component,
    SectionOurInfo1Component,
    SectionCaseStudy3Component,
    SectionSidebarComponent,
    SectionSidebarSearchComponent,
    SectionSidebarCategoriesComponent,
    SectionSidebarPostsComponent,
    SectionSidebarGalleryComponent,
    SectionSidebarSocialComponent,
    SectionLatestNewsComponent,
    SectionCommentsComponent,
    SectionLeaveAReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
