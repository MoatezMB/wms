export const siteModule = {
    HOME: "",
    COMPANY: "company",
    ITSOLUTIONS: "itsolutions",
    ITBLOGS: "itblogs"
}

export const homePage = {
    HOME1: "index",
    HOME2: "index2",
    HOME3: "index3",
}

export const innerPage = {
    ABOUT: "about",
    FAQ: "faq",
    GALLERY: "gallery",
    ICONS: "icons",
    PRICING: "pricing",
    TEAM: "team",
    TESTIMONIALS: "testimonials",
    WHYCHOOSEUS: "why-choose-us",
    CONTACT: "contact",
    MISSION: "mission",
    SERVICES: "services",
    SERVICES_DETAIL: "services/detail",
    PORTFOLIO1: "portfolio/1",
    PORTFOLIO2: "portfolio/2",
    PORTFOLIO_DETAIL: "portfolio/detail",
    BLOGS_GRID: "blogs/grid",
    BLOGS_LIST_SIDEBAR: "blogs/list-sidebar",
    BLOGS_DETAIL_SIDEBAR: "blogs/detail-sidebar",
    BLOGS_DETAIL: "blogs/detail"
}

export function routeWith(module: string, page: string) {
    return "/"+module+"/"+page
}