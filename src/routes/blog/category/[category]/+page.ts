import type { LoadParams, Post, LoadResult } from '$lib/types/interfaces'

export const load = async ({ fetch, params }: {fetch: any, params: LoadParams }): Promise<LoadResult> => {
    try {
        const { category } = params;
        const response = await fetch(`/api/posts`);
        const allPosts: Post[] = await response.json();
    

        const posts: Post[] = allPosts
            .filter(post => post.meta.categories.includes(category));
        return {
            category,
            posts
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}