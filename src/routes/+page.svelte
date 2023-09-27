<p></p>
<script>
    import Thumb from "$lib/thumb.svelte";
    import { onMount } from "svelte";
    let loading = true;
    onMount(() => {
        setTimeout (() => {
            // where the code runs for the timeout
           loading = false;
        }, 5000);
    });
</script>

<div class="flex subscription justify-between px-8 flex-wrap">
    <Thumb
    title="Underwater Lives: Jellyfish"
    thumbnail="jellyfish.jpg"
    avatar="bell-solid.svg"
    creator="Ocean Discovery"
    views="135k"
    loading={loading}
    />
    <Thumb
    title="How To Paint Landscapes"
    thumbnail="mountain.jpg"
    avatar="bell-solid.svg"
    creator="Robert Lasso"
    views="102k"
    loading={loading}
    />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
</div>

<style>
    .flex {
        padding-bottom: 4rem;
        max-width: 1600px;
    }
</style>