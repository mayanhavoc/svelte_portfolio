<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '$lib/components/styles/style.css';
</script>

<Header />

<main>
    <slot />
</main>

<Footer />