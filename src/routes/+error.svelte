<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Saroj Regmi | Error</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen w-screen gap-2.5">
	<h1 class="text-center">Sorry! <br />Looks like this page is broken.</h1>
	<p>{page.error?.message || 'Something went wrong.'}</p>
</div>
