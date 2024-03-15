import fs from "fs";
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
export function readPage(path) {
    return fs.readFileSync(path).toString();
}
export function renderPage(page, config = {}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    return header
        .replace("$TAB_TITLE$", config.tabTitle ?? "Node Cookbook")
        .replace("$CSS_LINKS$", config.CSSLinks ?? "")
        + page
            .replace("%SUB_TITLE%", config.subTitle ?? "")
            .replace("%MAIN_TITLE%", config.mainTitle ?? "")
            .replace("%DESCRIPTION%", config.description ?? "")
            .replace("%EXPLANATION%", config.explanation ?? "")
            .replace("%CODE_EXAMPLES%", config.codeExamples ?? "")
            .replace("%KEY_POINT_HEADER%", config.keyPointHeader ?? "")
            .replace("%MY_KEY_POINTS%", config.myKeyPoints ?? "")
        + footer;
}
