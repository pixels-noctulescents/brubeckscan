<script lang="ts">
	import { overview } from '$lib/stores';
	import type { ActionData } from './$types';
	import FavoriteTotals from '$lib/components/FavoriteTotals.svelte';
	import FavoriteNode from '$lib/components/FavoriteNode.svelte';
	import FavoriteAdd from '$lib/components/FavoriteAdd.svelte';

	export let form: ActionData;
</script>

<div class="flex w-full max-w-screen-lg flex-col flex-wrap gap-10 p-8 lg:p-0 lg:pt-20 lg:pb-40">
	<FavoriteAdd result={form} />
	<FavoriteTotals />
	{#if $overview}
		<div class="nodeContainer start flex w-full flex-wrap items-stretch gap-4">
			{#each $overview.favorites as node (node.db.id)}
				<div class="node flex w-full">
					<FavoriteNode {node} />
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.node {
		max-width: calc(50% - 8px);
	}
	@media (max-width: 1025px) {
		.node {
			max-width: unset;
		}
	}
</style>
