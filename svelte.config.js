// import adapter from '@sveltejs/adapter-auto';
// Change the auto adapter to static in order to automatically pre-render site
// import adapter from '@sveltejs/adapter-static'

import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	extensions: ['.svelte', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			},
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			]
		}),
	],


	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// if true, will create a Netlify Edge Function rather
      		// than using standard Node-based functions
      		edge: false,
				
      		// if true, will split your app into multiple functions
      		// instead of creating a single one for the entire app.
      		// if `edge` is true, this option cannot be used
      		split: false
		})
	}
};

export default config;
