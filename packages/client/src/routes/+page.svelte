<script lang="ts">
	import HomeLanding from '$lib/components/HomeLanding.svelte';
	import TvlHistoryGraph from '$lib/components/Home/TVLHistoryGraph.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>BrubeckScan | Home</title>
</svelte:head>

<div class="w-full">
	<HomeLanding />
	{#if data.history}
		<TvlHistoryGraph history={data.history} />
	{/if}
</div>

<style>
</style>
