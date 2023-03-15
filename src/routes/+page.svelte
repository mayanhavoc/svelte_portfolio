<svelte:head>
    <title>Home - Embrace the blockchain</title>
</svelte:head>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 100%;
        max-width: 75rem;
        margin: 0 auto;
        padding: 0 1em;
        position: relative;
    }

    @media (min-width: 600px){
        .hero {
            max-width: 100vw;
        }
        .hero .heading {
            font-size: var(--medium);
        }
    }
</style>

<script lang="ts">
    import type { Post } from "$lib/types/interfaces";
    import About from './about/+page.svelte'
    import Work from './work/+page.svelte'
    import Blog from './blog/+page.svelte'
    export let data: { posts: Post[]};
</script>

<div class="hero">
    <h1 class="heading">Embrace the blockchain</h1>
    <p class="tagline">Web 3 and smart contract solutions</p>
</div>
<About />
<Work />
<Blog data={data} />
