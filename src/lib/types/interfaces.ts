export interface PostMetadata {
    id: string;
    title: string;
    date: string;
    category: [];
}

export interface Post {
    meta: {
        id: string;
        title: string;
        date: string;
        category: [];
        sources: [];
    },
    path: string;
    default: string;
}[]

export interface LoadResult {
    Content: string;
    title: string;
    date: string;
    categories: [];
}

export interface LoadParams {
    category: string;
}