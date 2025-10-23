<script>
	import { safeEncode } from '$lib/utils/string';

	let { children } = $props();
	const safeChildValue = safeEncode(children);
</script>

<h3 id={safeChildValue} class="group flex items-center gap-2.5">
	{children}
	<a href={`#${safeChildValue}`} class="hidden group-hover:block hover:text-blue-500"> # </a>
</h3>
