import fs from "fs"

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
const sidebarNavigation = fs.readFileSync("./public/components/sidebar_navigation/sidebar_navigation.html").toString();
export const cookbookContent = fs.readFileSync("./public/assets/page_json_data/cookbook_content.json").toString();

interface Config {
    [key: string]: string | undefined;      // This is equilevant to unlimitted tags and addons to the config
}

export function readPage(path: string) {
    return fs.readFileSync(path).toString();
}

export function renderPage(page: string, config: Config = {}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    let renderedPage = header
        .replace("$TAB_TITLE$", config.tabTitle ?? "Node Cookbook")
        .replace("$CSS_LINKS$", config.CSSLinks ?? "")
        + sidebarNavigation 
        + page
        + footer;
        

    return renderedPage;
}

