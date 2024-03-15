export interface CodeExample {
    code: string;
}

export interface CookbookContent {
    id: number;
    subTitle?: string; // Making subTitle optional to match the JSON structure
    title: string;
    codeExamples: CodeExample[];
    description: string;
    explanation: string;
    keyPointHeader: string;
    myKeyPoints: string;
}