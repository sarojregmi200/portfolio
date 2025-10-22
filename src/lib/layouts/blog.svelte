<script>
	export let title, author, date, intro, cover_img;
</script>

<article>
	<section class="heading">
		{#if cover_img}
			<img src={cover_img} alt={`cover image for ${title}`} />
		{/if}

		<h1>
			{title}
		</h1>
		<p class="intro">
			{intro}
		</p>

		{#if author}
			<p class="author">
				{author}
			</p>
		{/if}

		<p class="date">
			{date}
		</p>
	</section>

	<slot>
	</slot>
</article>
