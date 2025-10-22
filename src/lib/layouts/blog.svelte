<script>
	export let title,
		author = 'Saroj Regmi',
		date,
		intro,
		cover_img,
		keywords;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={intro} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta property="og:title" content={title} />

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

		<p class="intro my-5">
			{intro}
		</p>

		<div class="right ml-auto flex w-max! flex-col text-right">
			{#if author}
				<p class="author font-bold">
					{author}
				</p>
			{/if}

			<p class="date text-xs">
				- {date}
			</p>
		</div>
	</section>

	<slot></slot>
</article>
