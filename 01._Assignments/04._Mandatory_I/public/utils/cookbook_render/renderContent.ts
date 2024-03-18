import { CookbookContent } from "../../types/CookbookContent";

interface CookbookData { data: CookbookContent[] }

function fetchAndDisplayCookbookPage(page: number, itemsPerPage: number) {
    fetch("/api/cookbook")
        .then(response => response.json())
        .then((result: CookbookData) => {
            const startIndex = page * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageData = result.data.slice(startIndex, endIndex);
            if (pageData.length > 0) {
                displayPageData(pageData[0]);
            }
        });
}

function fetchAndDisplayCookbookTitle() {
    return fetch("/api/cookbook")
        .then(response => response.json())
        .then((result: CookbookData) => result.data)
        .catch(error => {
            throw new Error(`Fetching cookbook title failed: ${error.message}`);
        });
}

function appendCodeExamples(containerId: string, codeExamples: string[]) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    codeExamples.forEach(code => {
        const template = document.createElement('pre');
        template.className = "mx-auto w-11/12 mb-8";

        const codeElement = document.createElement('code');
        codeElement.textContent = code; // Set as text content to avoid HTML parsing

        // Determine if the snippet is HTML, JavaScript, or YAML
        const isHtmlSnippet = code.trim().startsWith('<!DOCTYPE html>');
        const isYamlSnippet = code.trim().startsWith('{') && code.trim().endsWith('}');
        let languageClass;
        if (isHtmlSnippet) {
            languageClass = 'language-html';
        } else if (isYamlSnippet) {
            languageClass = 'language-yaml';
        } else {
            languageClass = 'language-javascript';
        }
        codeElement.className = `${languageClass} rounded-2xl`;

        template.appendChild(codeElement);
        container.appendChild(template);
    });

    //@ts-ignore   We are importing it directly on the homepage, so it's actually callable anywhere
    hljs.highlightAll();
}


function updateTextContent(id: string, text: string) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

function displayPageData(data: CookbookContent) {
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

export function initContentPage(itemsPerPage: number) {
    let currentPage = parseInt(localStorage.getItem('currentPage') || '0', 10);

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    const updatePage = (newPage: number) => {
        currentPage = newPage;
        // Update currentPage in localStorage whenever it changes
        localStorage.setItem('currentPage', currentPage.toString());
        fetchAndDisplayCookbookPage(currentPage, itemsPerPage);
        updatePrevButtonState();
        window.scrollTo(0, 0); // Scroll to top
    };

    const updatePrevButtonState = () => {
        if (prevButton) {
            if (currentPage === 0) {
                prevButton.classList.add('disabled', 'opacity-50', 'cursor-not-allowed');
            } else {
                prevButton.classList.remove('disabled', 'opacity-50', 'cursor-not-allowed');
            }
        }
    };

    updatePrevButtonState();

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentPage > 0) {
                updatePage(currentPage - 1);
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            fetch('/api/cookbook')
                .then(response => response.json())
                .then((result: CookbookData) => {
                    if (currentPage < Math.ceil(result.data.length / itemsPerPage) - 1) {
                        updatePage(currentPage + 1);
                    }
                });
        });
    }

    fetchAndDisplayCookbookPage(currentPage, itemsPerPage);
}

export function displayCookbookForSidebarNavigation() {
    fetchAndDisplayCookbookTitle().then(cookbookContents => {
        const sidebarList = document.getElementById('cookbook-sidebar-list');
        if (!sidebarList) return;

        sidebarList.innerHTML = ''; // Clear existing list items

        cookbookContents.forEach((content, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = content.title;
            listItem.className = "cursor-pointer hover:bg-gray-200 ml-4 text-lg gap-2";
            listItem.addEventListener('click', () => {
                localStorage.setItem('currentPage', index.toString()); // Store index as currentPage in localStorage
                initContentPage(1);
            });
            sidebarList.appendChild(listItem);
        });

        const sidebar = document.getElementById('sidebar');
        const toggleButton = document.getElementById('sidebarToggle');

        toggleButton?.addEventListener('click', () => {
            sidebar?.classList.toggle('-translate-x-full');
            // Adjust the toggle button's position based on the sidebar's state. No rotation is applied.
            if (sidebar?.classList.contains('-translate-x-full')) {
                // Sidebar is hidden, move toggle button to its initial position
                toggleButton.style.transform = 'translateX(0px)';
            } else {
                // Sidebar is shown, move toggle button alongside the sidebar
                toggleButton.style.transform = `translateX(${sidebar && sidebar.offsetWidth}px)`;
            }
        });

    }).catch(error => {
        console.error("Failed to display cookbook sidebar navigation:", error);
    });
}

