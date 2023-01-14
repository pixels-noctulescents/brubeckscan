<script lang="ts">
	import { user } from '$lib/stores';
	import Favorite from '$lib/components/Favorites/Favorite.svelte';
	import Totals from '$lib/components/Favorites/Totals.svelte';
	import Doughnut from '$lib/components/Favorites/Doughnut.svelte';
	import Add from '$lib/components/Favorites/Add.svelte';
</script>

{#if $user}
	<div class="flex w-full max-w-screen-lg flex-col items-stretch gap-8 pt-10 pb-20">
		<div class="sticky top-0 flex">
			<Add />
		</div>
		{#if $user.Favorite.length}
			<div class="flex w-full max-w-screen-lg items-stretch gap-8">
				<div class="flex w-4/6">
					<Totals />
				</div>
				<div class="flex w-2/6">
					<Doughnut />
				</div>
			</div>
		{/if}
		<div class="flex flex-row flex-wrap justify-between gap-4">
			{#each $user.Favorite as favorite (favorite.id)}
				<div class="node flex w-full">
					<Favorite {favorite} />
				</div>
			{/each}
		</div>
	</div>
{/if}

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
