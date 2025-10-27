<script lang="ts">
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const blogs = data.blogs;
</script>

<h1>Here are some blogs that you can check.</h1>

<div class="list">
	{#each blogs as blog, index}
		<div class="container">
			<div class="index">{index}</div>
			<div class="title">
				{blog.metadata.title}
			</div>

			<div class="desc">
				{blog.metadata.intro}
			</div>
		</div>
	{/each}
</div>
