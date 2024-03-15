import hljs from "highlight.js";
export function codeHighlighter(code, language) {
    return hljs.highlight(code, { language }).value;
}
