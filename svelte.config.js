import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.svx'],
		}
	)],

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: '404.html'
		})
	},

	extensions: ['.svelte', '.svx'],
	prerender: {
		entries: ['*', '/devblog/*'] // Prerender all blog paths
	  }
};

export default config;
