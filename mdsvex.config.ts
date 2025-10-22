import type { MdsvexOptions } from 'mdsvex';
import { join } from 'node:path';

const defineConfig = (config: MdsvexOptions) => config;

export default defineConfig({
	layout: {
		_: join(import.meta.dirname, './src/lib/layouts/blog.svelte')
	},
	extensions: ['.svx', '.md']
});
