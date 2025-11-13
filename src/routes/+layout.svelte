<script lang="ts">
	let { children } = $props();
	import '../app.css';

	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Cursor from '$lib/components/cursor.svelte';

	onMount(() => {
		if (browser) {
			posthog.init('phc_B2YTvdI7h8z7lQPQ1KYTx1qYxAiGUuSpS0KjmAmb9tJ', {
				api_host: 'https://us.i.posthog.com',
				person_profiles: 'identified_only'
			});
		}
	});
</script>

<div>
  <Cursor />
	{@render children()}
</div>
