<script lang="ts">
	import CommentSection from '$lib/components/comment-section.svelte';
	import { prettyDate } from '$lib/utils/date';

	export let title,
		author = 'Saroj Regmi',
		date,
		intro,
		cover_img,
		keywords,
		comments = true;

	const formattedDate = prettyDate(new Date(date));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={intro} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta property="og:title" content={title} />
	<meta property="giscus:title" content="testing:jaskdfldfj" />
	<meta property="giscus:desctipion" content="testingdesc" />
	<meta property="giscus:backlink" content="testinglink" />

	{#if cover_img}
		<meta property="og:image" content={cover_img} />
	{/if}

	<meta property="og:title" content={title} />
</svelte:head>

<article class="mx-auto h-screen max-w-3xl px-5 py-10 sm:p-10">
	<section class="heading flex h-3/4 flex-col items-center justify-center **:w-full">
		{#if cover_img}
			<img src={cover_img} alt={`cover image for ${title}`} />
		{/if}

		<header>
			{title}
		</header>

		<p class="intro my-5!">
			{intro}
		</p>

		<p class="right ml-auto flex w-max! flex-col text-right">
			{#if author}
				<span class="author font-bold">
					{author}
				</span>
			{/if}

			<span class="date text-xs">
				- {formattedDate}
			</span>
		</p>
	</section>

	<slot></slot>

	{#if comments}
		<div class="mt-20">
			<CommentSection />
		</div>
	{/if}
</article>
