<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Saroj Regmi | Home</title>
</svelte:head>

<div class="flex h-screen flex-col justify-center gap-2.5 p-2.5 sm:p-20">
	<small class="text-sm text-neutral-500 sm:text-xl dark:text-gray-300">Hey It's Me Saroj</small>
	<ul
		class="flex flex-col gap-1 text-left text-3xl text-neutral-800 sm:gap-2.5 sm:text-6xl dark:text-white"
	>
		<li>A developer for fun,</li>
		<li>designer by needs,</li>
		<li>Linux and Vim user by heart.</li>
	</ul>

	<button
		onclick={() => {
			goto('/blogs/i automated whatsapp messages');
		}}
		class="self-end rounded-md bg-white/90 px-10 py-3 text-xl hover:bg-white/100 active:scale-96 hover:scale-105 transition-transform duration-75"
	>
		Read a blog
	</button>
</div>
