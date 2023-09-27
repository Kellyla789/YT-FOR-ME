<script lang="ts">
	export let thumbnail = '';
	export let  title = '';
	export let creator = '';
	export let avatar = '';
	export let views = '';
	export let loading = true;
</script>

<section>
	<div class="thumbnail m-4">
		{#if !loading}
			 <img src={thumbnail} alt="">
		{/if}
	</div>
	<div class="flex gap-4 mx-4">
		<div class="avatar">
			{#if !loading}
			 <img src={avatar} alt="">
		{/if}
		</div>

		<div>
			{#if !loading}
			<div class="long-text mb-4">{title}</div>
			<div class="text">{creator} | {views}</div>
			{:else}
			<div class="long-text bg-slate-400 mb-4"></div>
			<div class="text bg-slate-400"></div>
		{/if}
		</div>
	</div>
</section>

<style>
	.thumbnail {
		width: 300px;
		height: 180px;
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
