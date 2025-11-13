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
		const metadata = ((await fileModule()) as any).metadata as TBlogFrontMatter;

		if (import.meta.env.PROD)
			if (metadata.status === 'draft' || metadata?.status === undefined) continue;

		blogs.push({
			fileName: blogFileName,
			slug: `/blogs/${basename(blogFileName.replace('\/+page.svx', ''))}`,
			metadata
		});
	}

	blogs.sort((a, b) => {
		try {
			const dateA = new Date(a.metadata.date);
			const dateB = new Date(b.metadata.date);

			if (dateA < dateB) return -1;
			if (dateA > dateB) return 1;

			return 0;
		} catch {
			return 0;
		}
	});

	return {
		blogs
	};
};
