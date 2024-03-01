function getCopyRightYear() {
    const copyRightParagraph = document.getElementById("copyright-year");
    copyRightParagraph.textContent = `© ${new Date().getFullYear()}`
}

getCopyRightYear();