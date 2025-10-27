import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const PORT = import.meta.env?.PORT || 3000;

export default defineConfig({
	server: {
		port: Number(PORT)
	},
	plugins: [tailwindcss(), sveltekit()]
});
