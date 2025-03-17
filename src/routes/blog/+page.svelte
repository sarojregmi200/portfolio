<script lang="ts">
    import { goto } from "$app/navigation";
    import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
    <title>Saroj Regmi | Blog</title>
</svelte:head>

<div
    class="flex flex-col items-center justify-center h-screen w-screen gap-2.5 px-10"
>
    <header class="text-center">The blog home page is not complete yet.</header>
    <p>In the mean time there is only one blog that I have check it out.</p>

    <Button
        on:click={() => {
            goto("/blog/wp-automation-taught-me-somethings-fun");
        }}
        class="mt-10"
    >
        Go Ahead.
    </Button>
</div>
