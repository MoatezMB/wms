import { innerPage, routeWith, siteModule } from "./constants";

export const banner = {
    about: {
        background: "assets/images/banner/bnr-7.jpg",
        title: "About Us",
        crumb: "About Us",
        watermark: "It Solution"
    },
    faq: {
        background: "assets/images/banner/bnr-4.jpg",
        title: "Faq Page",
        crumb: "Faq Page",
        watermark: "It Solution"
    },
    gallery: {
        background: "assets/images/banner/bnr-2.jpg",
        title: "Gallery Page",
        crumb: "Gallery Page",
        watermark: "It Solution"
    },
    icons: {
        background: "assets/images/banner/bnr-4.jpg",
        title: "Icons",
        crumb: "icon-font",
        watermark: "It Solution"
    },
    testimonials: {
        background: "assets/images/banner/bnr-3.jpg",
        title: "Testimonials",
        crumb: "Testimonials",
        watermark: "It Solution"
    },
    whychooseus: {
        background: "assets/images/banner/bnr-8.jpg",
        title: "Why choose Us",
        crumb: "Why choose Us",
        watermark: "It Solution"
    },
    pricing: {
        background: "assets/images/banner/bnr-7.jpg",
        title: "Price Table",
        crumb: "Price Table",
        watermark: "It Solution"
    },
    team: {
        background: "assets/images/banner/bnr-2.jpg",
        title: "Team Member",
        crumb: "Our Team",
        watermark: "It Solution"
    },
    mission: {
        background: "assets/images/banner/bnr-7.jpg",
        title: "Mission & Vision",
        crumb: "Mission & Vision",
        watermark: "It Solution"
    },
    services: {
        background: "assets/images/banner/bnr-7.jpg",
        title: "Our Services",
        crumb: "Our Services",
        watermark: "It Solution"
    },
    portfolio1: {
        background: "assets/images/banner/bnr-4.jpg",
        title: "Portfolio Page",
        crumb: "Portfolio",
        watermark: "It Solution"
    },
    portfolio2: {
        background: "assets/images/banner/bnr-5.jpg",
        title: "Portfolio-2 Page",
        crumb: "Portfolio-2 Page",
        watermark: "It Solution"
    },
    portfoliodetail: {
        background: "assets/images/banner/bnr-7.jpg",
        title: "Portfolio Detail",
        crumb: "Portfolio Detail",
        watermark: "It Solution"
    },
    bloggrid: {
        background: "assets/images/banner/bnr-1.jpg",
        title: "Blog Page",
        crumb: "Blog Page",
        watermark: "It Solution"
    },
    bloglist: {
        background: "assets/images/banner/bnr-8.jpg",
        title: "Blog Arcive",
        crumb: "Blog Single Grid",
        watermark: "It Solution"
    },
    blogdetailsidebar: {
        background: "assets/images/banner/bnr-10.jpg",
        title: "Blog Detail",
        crumb: "Blog Detail",
        watermark: "It Solution"
    },
    blogdetail: {
        background: "assets/images/banner/bnr-1.jpg",
        title: "Blog Detail",
        crumb: "Blog Detail",
        watermark: "It Solution"
    },
    contact: {
        background: "assets/images/banner/bnr-6.jpg",
        title: "Contact Us",
        crumb: "Contact Us",
        watermark: "It Solution"
    }
}

export function setBannerData(_url: string): {} {
    switch (_url) {
        case routeWith(siteModule.COMPANY, innerPage.ABOUT):
            return banner.about;
        case routeWith(siteModule.COMPANY, innerPage.FAQ):
            return banner.faq;
        case routeWith(siteModule.COMPANY, innerPage.GALLERY):
            return banner.gallery;
        case routeWith(siteModule.COMPANY, innerPage.ICONS):
            return banner.icons;
        case routeWith(siteModule.COMPANY, innerPage.TESTIMONIALS):
            return banner.testimonials;
        case routeWith(siteModule.COMPANY, innerPage.WHYCHOOSEUS):
            return banner.whychooseus;
        case routeWith(siteModule.COMPANY, innerPage.PRICING):
            return banner.pricing;
        case routeWith(siteModule.COMPANY, innerPage.TEAM):
            return banner.team;
        case routeWith(siteModule.ITSOLUTIONS, innerPage.MISSION):
            return banner.mission;
        case routeWith(siteModule.ITSOLUTIONS, innerPage.SERVICES):
            return banner.services;
        case routeWith(siteModule.ITSOLUTIONS, innerPage.PORTFOLIO1):
            return banner.portfolio1;
        case routeWith(siteModule.ITSOLUTIONS, innerPage.PORTFOLIO2):
            return banner.portfolio2;
        case routeWith(siteModule.ITSOLUTIONS, innerPage.PORTFOLIO_DETAIL):
            return banner.portfoliodetail;
        case routeWith(siteModule.ITBLOGS, innerPage.BLOGS_GRID):
            return banner.bloggrid;
        case routeWith(siteModule.ITBLOGS, innerPage.BLOGS_LIST_SIDEBAR):
            return banner.bloglist;
        case routeWith(siteModule.ITBLOGS, innerPage.BLOGS_DETAIL_SIDEBAR):
            return banner.blogdetailsidebar;
        case routeWith(siteModule.ITBLOGS, innerPage.BLOGS_DETAIL):
            return banner.blogdetail;
        case routeWith(siteModule.COMPANY, innerPage.CONTACT):
            return banner.contact;
        default:
            return {};
    }
}