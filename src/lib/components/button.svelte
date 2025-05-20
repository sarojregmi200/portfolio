<script>
	import { cn } from '$lib/utils';
	import { Button } from 'bits-ui';
	let { className, ...props } = $props();
</script>

<Button.Root
	class={cn(
		`rounded-input bg-foreground rounded-md text-white shadow-mini hover:bg-foreground/80 inline-flex
	h-max w-max py-2 px-4 items-center justify-center text-sm
	font-semibold active:scale-[0.95] active:transition-all`,
		className
	)}
	{...props}
/>
