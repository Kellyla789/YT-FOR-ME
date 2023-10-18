<script lang="ts">
    import '$lib/app.css';
    import Sidenav from '$lib/sidenav.svelte';
    import Navbar from '$lib/navbar.svelte';

    let clientWidth = 0;
    let showSideNav = false;
    $: isMobile = clientWidth < 768;
    $: show = isMobile || showSideNav;
</script>


<div bind:clientWidth={clientWidth} class="min-h-screen bg-slate-800 text-slate-100">
    <Navbar on:hamburger={() => showSideNav = !showSideNav}/>
    <Sidenav {show} />
        <main class:phantom={!isMobile && showSideNav}>
            <slot />
        </main>
</div>

<style>
    .phantom {
        margin-left: 300px;
    }
</style>