<script lang="ts">
	let { children } = $props();
</script>

{@render children()}

<style>
	@import '../../blog.css';
	@reference "../../app.css";
</style>
