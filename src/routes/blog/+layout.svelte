<script>
	let { children } = $props();
</script>

<article class="w-full py-10 px-5 sm:p-10 h-screen">
	<main class="flex justify-center items-center h-auto">
		{@render children()}
	</main>
</article>
