<svelte:head>
    <title>Roberto Mayen - Web3 & Full Stack Development</title>
</svelte:head>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin-bottom: 1em;
        padding: 0 1em;
        position: relative;
        z-index: 0;
    }

    .contact-btn {
        margin: 2em 0;
        padding: 0.5em 1em;
        border-radius: 5px;
        text-decoration: none;
        background-color: var(--highlight-color);
        font-size: var(--small);
        font-family: var(--secondary-font);
        cursor: pointer;
    }

    .contact-btn .contact-link {
        text-decoration: none;
        color: var(--background-color);
    }

    .contact-btn:hover {
        transform: scale(1.2);
        background:var(--font-color);
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
        <div class="container">
        <h1 class="heading">Roberto Mayen</h1>
        <p class="tagline">Web3 and Full Stack Development</p>
        <button class="contact-btn">
            <a href="/contact" class="contact-link">Get in touch</a>
        </button>
    </div>
</div>
<About />
<Work />
