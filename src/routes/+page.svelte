<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button.svelte';
</script>

<svelte:head>
	<title>Saroj Regmi | Home</title>
</svelte:head>

<div class="sm:p-20 p-2.5 flex flex-col gap-2.5 justify-center h-screen">
	<sm class="sm:text-xl text-sm dark:text-gray-300 text-neutral-500">Hey It's Me Saroj</sm>
	<ul
		class="dark:text-white text-neutral-800 text-3xl sm:text-6xl flex flex-col sm:gap-2.5 gap-1 text-left"
	>
		<li>A developer for fun,</li>
		<li>desinger by needs,</li>
		<li>Linux and Vim user by heart.</li>
	</ul>

	<Button
		onclick={() => {
			goto('/i automated whatsapp messages');
		}}
		className="self-end mt-5">Read a blog</Button
	>
</div>
