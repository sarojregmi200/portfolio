import type { MdsvexOptions } from 'mdsvex';
import { join } from 'node:path';
import rehypeAutolinkHeadings, { type Options } from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const defineConfig = (config: MdsvexOptions) => config;

const rehypeAutolinkHeadingsOptions: Options = {
	behavior: 'wrap'
};

export default defineConfig({
	rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions]],
	layout: {
		_: join(import.meta.dirname, './src/lib/layouts/blog.svelte')
	},
	extensions: ['.svx', '.md']
});
