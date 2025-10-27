import type { TBlogFrontMatter } from '$lib/types';
import { basename } from 'path';

type TBlog = {
	fileName: string;
	slug: string;
	metadata: TBlogFrontMatter;
};

export const load = async () => {
	const globResponse = import.meta.glob('./**/*.svx') ?? {};
	const blogs: TBlog[] = [];

	for (let [blogFileName, fileModule] of Object.entries(globResponse)) {
		const metadata = ((await fileModule()) as any).metadata;

		// TODO: sort them with created date in desc order.
		blogs.push({
			fileName: blogFileName,
			slug: basename(blogFileName.replace('\/+page.svx', '')),
			metadata
		});
	}

	return {
		blogs
	};
};
