export type TBlogFrontMatter = {
	title: string;
	intro: string;
	keywords: string;
	author: string;
	/** Iso date, string */
	date: string;
	status?: 'published' | 'draft';
};
