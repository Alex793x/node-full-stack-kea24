function fetchAndDisplayCookbookPage(page, itemsPerPage) {
    fetch("/api/cookbook")
        .then(response => response.json())
        .then((result) => {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = result.data.slice(startIndex, endIndex);
        if (pageData.length > 0) {
            displayPageData(pageData[0]);
        }
    });
}
function appendCodeExamples(containerId, codeExamples) {
    const container = document.getElementById(containerId);
    if (!container)
        return;
    container.innerHTML = '';
    codeExamples.forEach(code => {
        const template = document.createElement('pre');
        template.className = "mx-auto w-11/12 mb-8";
        const codeElement = document.createElement('code');
        codeElement.textContent = code; // Set as text content to avoid HTML parsing
        const isHtmlSnippet = code.trim().startsWith('<!DOCTYPE html>');
        codeElement.className = isHtmlSnippet ? 'language-html rounded-2xl' : 'language-javascript rounded-2xl';
        template.appendChild(codeElement);
        container.appendChild(template);
    });
    //@ts-ignore   We are importing it directly on homepage, so its actually callable anywhere
    hljs.highlightAll();
}
function updateTextContent(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}
function displayPageData(data) {
    updateTextContent('subTitle', data.subTitle ?? '');
    updateTextContent('title', data.title ?? '');
    updateTextContent('description', data.description ?? '');
    if (data.codeExamples) {
        appendCodeExamples('codeExamples', data.codeExamples.map(example => example.code));
    }
    updateTextContent('explanation', data.explanation ?? '');
    updateTextContent('keyPointHeader', data.keyPointHeader ?? '');
    updateTextContent('myKeyPoints', data.myKeyPoints ?? '');
}
export function initContentPage(currentPage, itemsPerPage) {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const updatePrevButtonState = () => {
        if (prevButton) {
            if (currentPage === 0) {
                prevButton.classList.add('disabled', 'opacity-50', 'cursor-not-allowed');
            }
            else {
                prevButton.classList.remove('disabled', 'opacity-50', 'cursor-not-allowed');
            }
        }
    };
    updatePrevButtonState();
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage -= 1;
                fetchAndDisplayCookbookPage(currentPage, itemsPerPage);
                updatePrevButtonState();
            }
        });
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            fetch('/api/cookbook')
                .then(response => response.json())
                .then((result) => {
                if (currentPage < Math.ceil(result.data.length / itemsPerPage) - 1) {
                    currentPage += 1;
                    fetchAndDisplayCookbookPage(currentPage, itemsPerPage);
                    updatePrevButtonState(); // Update the state after changing the page
                }
            });
        });
    }
    fetchAndDisplayCookbookPage(currentPage, itemsPerPage);
}
