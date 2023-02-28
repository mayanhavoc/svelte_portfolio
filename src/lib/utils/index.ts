import type { PostMetadata, Post } from '$lib/types/interfaces';

// add explicit return type for Promise<Post[] to function signature`
export const fetchMarkdownPosts = async (): Promise<Post[]> => {
    try {
        // import.meta.glob is a Vite function that imports all files that match the glob (wildcard string) provided
        // the glob function returns an object where each file's relative path is the key, and the value is a 'resolver' (own term) that loads the contents as a Promise
        // The map method shapes each file's data, so it's easier to work with
        const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
        const iterablePostFiles = Object.entries(allPostFiles);
        // since each item awaits a Promise, we wrap it in an await Promise.all
        const allPosts = await Promise.all(
            iterablePostFiles.map(async ([path, resolver]) => {
                try {
                    const resolved = await resolver();
                    // add a type guard to handle the case where `resolved` is a function, since it needs to be called to get the actual metadata
                    const {metadata} = typeof resolved === 'function' ? await resolved() : resolved;
                    // The file path is different from the actual route (i.e., /src/routes/blog/post-title.md loads at /blog/post-title)
                    const postPath = path.slice(11,-3);
                    return {
                        // add a type assertion to `metadata` to convert it to `PostMetadata` so that it matches the type defined in `Post`
                        meta: metadata as PostMetadata,
                        path: postPath,
                    }
                } catch (error) {
                    console.error(error);
                    throw error;
                }
            })
        )
        // add a type assertion to the return value of `allPosts` to convert it to the correct type of `Post[]`
        return allPosts as Post[];
    } catch (error) { 
        console.error(error);
        throw error;
    }
};