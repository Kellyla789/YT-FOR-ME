<script lang="ts">
	import { createEventDispatcher } from "svelte";
    // notify the parent component of an event
    let dispatch = createEventDispatcher();
</script>


<nav class="bg-slate-900">
    <section class="yt-fixed flex items-center">
        <button class="menu m-4" on:click={() => dispatch('hamburger')}>
            <img width="25px" src="bars-solid.svg" alt="menu">
        </button>
        <a href='./'>Logo</a>
    </section>

    <section class="yt-fill flex items-center">
        <div>
            <label class="sr-only" for="search">Search:</label>
            <input  id="search" type="text" placeholder="Search"/>
        </div>
        <button class="m-5">
            <img width="24px" src="magnifying-glass-solid.svg" alt="search">
        </button>
    </section>

    <section class="flex">
        <div class="notification m-4">
        </div>
        <div class="profile m-5">
            <img width="24px" src="bell-solid.svg" alt="Notification">
        </div>

    <section class="yt-fixed flex items-center">
        <a href='./'>| Profile |</a>
    </section>

</nav>

<style>
    .yt-fixed {
        width: 250px;
        font-size: 17px;
    }

    nav {
        display: flex;

    }

    .yt-fill {
        flex-grow: 1;
        color:black;
    }
</style>