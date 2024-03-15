"use strict";
function getCopyRightYear() {
    const copyRightParagraph = document.getElementById("copyright-year");
    if (copyRightParagraph) {
        copyRightParagraph.textContent += `© ${new Date().getFullYear()}`;
    }
}
getCopyRightYear();
