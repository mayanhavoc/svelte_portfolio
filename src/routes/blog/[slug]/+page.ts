// Add interfaces to describe the shape of the Post and load function
import type { Post, LoadResult } from '$lib/types/interfaces';

// Add type annnotations for the `params` parameter and function's return type
export async function load({ params }: { params: { slug: string }}): Promise<LoadResult> {
    try {
        const post:Post = await import (`../${params.slug}.md`);
        const { title, date, categories } = post.metadata;
        const Content = post.default;
        return {
            Content,
            title,
            date,
            categories
        }
    } catch (error) { 
        console.log(error);
        throw error;
    }
}