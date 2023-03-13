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
</style>

<script>
    import About from './about/+page.svelte'
    import Work from './work/+page.svelte'
</script>

<div class="hero">
    <h1 class="heading">Embrace the blockchain</h1>
    <p class="tagline">Web 3 and smart contract solutions</p>
</div>
<About />
<Work />
