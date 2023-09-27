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
        width:300px;
    }

    .fixed  {
        display: fixed;
    }
</style>