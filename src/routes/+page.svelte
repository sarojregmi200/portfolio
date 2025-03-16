<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import { goto } from "$app/navigation";
</script>

<svelte:head>
    <title>Saroj Regmi | Home</title>
</svelte:head>

<div
    class="flex flex-col items-center justify-center h-screen w-screen gap-2.5 px-10"
>
    <header class="text-center">This portfolio is under construction!</header>
    <p>But you can check out my blogs.</p>

    <Button
        on:click={() => {
            goto("/blog");
        }}
        class="mt-10"
    >
        Read Blogs
    </Button>
</div>
