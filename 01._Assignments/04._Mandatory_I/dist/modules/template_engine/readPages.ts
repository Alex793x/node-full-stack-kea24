import { readPage, renderPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage, {
    CSSLinks: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">'
})

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = renderPage(contact, {
    tabTitle: "Contact me"
})

const about = readPage("./public/pages/about/about.html");
export const aboutPage = renderPage(about, {
    tabTitle: "About"
});