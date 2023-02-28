<script lang='ts'>
    import type { Post } from "$lib/types/interfaces";
    
    export let data: { posts: Post[] };

</script>

<h1>Blog</h1>

{#if data.posts && data.posts.length > 0}
<ul>
    {#each data.posts as post}
    <li>
        <h2>
            <a href={post.path}>
                {post.meta.title}
            </a>
        </h2>
        Published {post.meta.date}
    </li>
    {/each}
</ul>
{:else}
    <p>No posts found.</p>
{/if}