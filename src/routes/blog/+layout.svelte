<script>
    let { children } = $props();
</script>

<article class="w-full p-10 h-screen">
    <main class="flex justify-center items-center h-auto">
        {@render children()}
    </main>
</article>
