<script lang="ts">
	import type { PageProps } from './$types';
	import { onVisiblityChange } from '$lib/hooks/visible';
	import { preloadCode, preloadData } from '$app/navigation';

	const { data }: PageProps = $props();
	const blogs = data.blogs;

	const handleVisiblityChange = (
		isIntersecting: boolean,
		_: IntersectionObserverEntry,
		slug: string
	) => {
		if (!isIntersecting) return;

		preloadCode(slug);
		preloadData(slug);
	};
</script>

<svelte:head>
	<title>Blog lists | Saroj Regmi</title>
	<meta name="title" content="Blog lists | Saroj Regmi" />
</svelte:head>

<div class="wrapper mx-auto max-w-3xl px-5 py-10 sm:p-10">
	<h1>Here are some blogs that you can check.</h1>

	<div class="list mt-5">
		{#each blogs as blog}
			<div
				class="container rounded-md bg-muted p-2.5 text-muted-foreground"
				{@attach onVisiblityChange((...props) => handleVisiblityChange(...props, blog.slug))}
			>
				<div class="date text-xs">
					{blog.metadata.date}
				</div>

				<h1 class="title text-lg">
					<a href={blog.slug}>
						{blog.metadata.title}
					</a>
				</h1>

				<div class="desc text-sm">
					{blog.metadata.intro}
				</div>
			</div>
		{/each}
	</div>
</div>
