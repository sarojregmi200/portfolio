<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button.svelte';
</script>

<svelte:head>
	<title>Saroj Regmi | Home</title>
</svelte:head>

<div class="sm:p-20 p-5 space-y-5 flex flex-col gap-2.5 justify-center h-screen">
	<sm class="text-xl text-white">Hey It's Me Saroj</sm>
	<ul class="dark:text-white text-gray-500 text-5xl flex flex-col gap-2.5">
		<li>A developer for fun,</li>
		<li>desinger by needs,</li>
		<li>Linux and Vim user by heart.</li>
	</ul>

	<Button
		onclick={() => {
			goto('/i automated whatsapp messages');
		}}
		className="self-end">Read a blog</Button
	>
</div>
