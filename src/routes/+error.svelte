<script lang="ts">
    import { page } from "$app/state";
    import { Button } from "$lib/components/ui/button";
</script>

<div
    class="flex flex-col items-center justify-center h-screen w-screen gap-2.5"
>
    <h1 class="text-center">Sorry! <br />Looks like this page is broken.</h1>
    <p>{page.error?.message || "Something went wrong."}</p>

    <Button variant="default">Go home</Button>
</div>
