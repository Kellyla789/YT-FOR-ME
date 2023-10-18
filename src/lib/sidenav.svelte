<script lang="ts">
   export let show = true;
   export let isMobile = false;
</script>

{#if show}
<section class='bg-slate-200' class:fixed={isMobile}>
    SideNav that should hide on small-screen
</section>
{/if}

<style>
    section {
        width: 300px;
        height: 100dvh;
        /* 100 device vertical height */
        position: fixed;
        padding-top: 64px;
        padding-left: 8px;
        padding-right: 8px;
        z-index: 50;
        top: 0;
    }
</style>