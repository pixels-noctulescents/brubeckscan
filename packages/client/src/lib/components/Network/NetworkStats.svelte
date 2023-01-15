<script lang="ts">
	import type { Stats } from '@brubeckscan/common/types/networkStats';

	import Module from '$lib/components/Module.svelte';

	export let stats: Stats;
</script>

<div class="node flex w-full md:w-1/2">
	<Module>
		<div class="flex w-full flex-col justify-between text-lg">
			<h3 class="mb-6 text-2xl">APY / APR</h3>
			<div class="flex justify-between">
				<p class="text-gray-600">Spot APY</p>
				<p>{stats.SPOTAPY} %</p>
			</div>
			<div class="flex justify-between">
				<p class="text-gray-600">24H APY</p>
				<p>{stats['24APY']} %</p>
			</div>
			<div class="flex justify-between">
				<p class="text-gray-600">Spot APR</p>
				<p>{stats.SPOTAPR} %</p>
			</div>
			<div class="flex justify-between">
				<p class="text-gray-600">24H APR</p>
				<p>{stats['24APR']} %</p>
			</div>
		</div>
	</Module>
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
