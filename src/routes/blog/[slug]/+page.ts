// Add interfaces to describe the shape of the Post and load function
interface Post {
    metadata: {
        title: string;
        date: string;
    };
    default: string;
}

interface LoadResult {
    Content: string;
    title: string;
    date: string;
}

// Add type annnotations for the `params` parameter and function's return type
export async function load({ params }: { params: { slug: string }}): Promise<LoadResult> {
    try {
        const post:Post = await import (`../${params.slug}.md`);
        const { title, date } = post.metadata;
        const Content = post.default;

        return {
            Content,
            title,
            date,
        }
    } catch (error) { 
        console.log(error);
        throw error;
    }
}