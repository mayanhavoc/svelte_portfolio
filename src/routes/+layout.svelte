<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '$lib/components/styles/style.css';
    import { fade } from 'svelte/transition';
    import 'iconify-icon';
    export let data;
</script>

<Header />

{#key data.currentRoute}
<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
</main>
{/key}

<Footer />