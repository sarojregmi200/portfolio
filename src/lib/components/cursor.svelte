<script lang="ts">
	import type { TMousePosition } from '$lib/types';
	import { cn } from '$lib/utils/tailwind';
	import { onMount } from 'svelte';
	let position: TMousePosition | null = $state(null);

	const handleMouseMove = (e: MouseEvent) => {
		position = [e.pageX, e.pageY];
	};

	onMount(() => {
		document.body.addEventListener('mousemove', handleMouseMove);
		return () => {
			document.body.removeEventListener('mousemove', handleMouseMove);
		};
	});

	let transform = $derived(
		position !== null ? `transform:translate(${position[0]}px, ${position[1]}px)` : ''
	);
</script>


<!-- ///
Ideas
Fight mode will be an ester egg.
1. Battle mode that activates with :fight and basic support for command mode.
1. More like a discovery thing puzzle thing that people can hunt for. 

Fight Mode:
1. People can use this mode to fight with one another It iwll some how convert the texts to 3d and raise their 
levels and the fonts like mages and walls, with a minimap and thing like that. Where multiple users can fight.
1. Will write this complete thing in raylib c and use wasm to compile it to the web.
1. holy fucking shit I am getting pumped.
1. Results will be announced for everyone to see, in a non distracting manner.
1. Rendering things like swigly lines and things like that so,that people can use them as jump or something like that. holey shit making
navigation actually like places where people can jump to....

Basic interactions between cursors like cursors not being able to go close to one another, 
And saying something funny like this is not a dating site go back..... when they try to touch each other.
/// -->

<div style={transform} role="none" class={cn('fixed', position == null ? 'hidden' : 'block')}>
	<div class="relative mt-0.5">
		<div class="icon"></div>
		<div class={cn('annotation rounded-md bg-orange-700 text-xs text-white px-1 py-0.5 select-none')}>Anonymous user 1</div>
	</div>
</div>
