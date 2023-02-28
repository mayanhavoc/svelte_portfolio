<script lang='ts'>
    export let data;
</script>

{#if data.category && data.category.length > 0}
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