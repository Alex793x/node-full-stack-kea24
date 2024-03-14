import cookbookContent from '../../public/assets/page_json_data/homepage.json' assert { type: 'json' };
import aboutContent from '../../public/assets/page_json_data/about.json' assert { type: 'json' };


export function cookbookContentLoader() {
    return cookbookContent;
}


export function aboutContentLoader() {
    return aboutContent
}

