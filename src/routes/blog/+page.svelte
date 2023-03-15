<script lang='ts'>
    import type { Post } from "$lib/types/interfaces";
    
    export let data: { posts: Post[] };

</script>

<svelte:head>
    <title>Blog - Embrace the blockchain</title>
</svelte:head>

<div class="container">
    <h1 class="heading">Blog</h1>
    
    {#if data.posts && data.posts.length > 0}
    <ul class="list">
        {#each data.posts as post}
        <li class="list__item">
            <a class="item__link" href={post.path}>
                <h2 class="sub-heading">
                    {post.meta.title}
                </h2>
            </a>
            <p class="paragraph">Published {post.meta.date}</p>
        </li>
        {/each}
    </ul>
    {:else}
        <p>No posts found.</p>
    {/if}
</div>