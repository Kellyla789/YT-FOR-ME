<script lang="ts">
	export let thumbnail = '';
	export let title = '';
	export let creator = '';
	export let avatar = '';
	export let views = '';
	export let loading = true;
	export let id = 0;

	import gsap from 'gsap';
	function hover() {
		setTimeout(() => {
			gsap.to('.thumbnail-' + id, {
				scale: 1.2,
				duration: 0.5
			});
		});
	}

	function out() {
		setTimeout(() => {
			gsap.to('.thumbnail-' + id, {
				scale: 1,
				duration: 0.5
			});
		});
	}

	$: classes = 'thumbnail-' + id;
</script>

{#if !loading}
	<img class={classes} src={thumbnail} alt="">
{/if}

<section>
	<a class="thumbnail bg-slate-600 m-4"
        href="/"
        on:mouseover={hover}
        on:focus={hover}
        on:mouseout={out}
        on:blur={out}
></a>
</section>

<div class="flex gap-4 mx-4">
	<div class="avatar bg-slate-600">
		{#if !loading}
			<img src={avatar} alt="">
		{/if}
	</div>
	<div>
		{#if !loading}
			<div class="long-text mb-4">{title}</div>
			<div class="text">{creator} | {views}</div>
		{:else}
			<div class="long-text bg-slate-600 mb-4"></div>
			<div class="text bg-slate-600"></div>
		{/if}
	</div>
</div>

<style>
	img,
	.thumbnail {
		width: 300px;
		height: 180px;
		display: inline-block;
	}

	.avatar {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-bottom: 10px;
	}

	.long-text {
		width: 230px;
		height: 20px;
	}

	.text {
		width: 200px;
		height: 20px;
	}
</style>
