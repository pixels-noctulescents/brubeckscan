<script lang="ts">
	import type { Stats } from '@brubeckscan/common/types/networkStats';

	import Module from '$lib/components/Module.svelte';

	export let stats: Stats;
</script>

<div class="node flex w-full md:w-1/2">
	<Module>
		<div class="flex w-full flex-col justify-between text-lg">
			<div class="text-black">
				<h3 class="mb-2 text-2xl">APY / APR</h3>
			</div>
			<div>
				<div class="flex justify-between">
					<p class="text-gray-600">Spot APY</p>
					<p class="text-neutral-800">{stats.SPOTAPY} %</p>
				</div>
				<div class="flex justify-between">
					<p class="text-gray-600">24H APY</p>
					<p class="text-neutral-800">{stats['24APY']} %</p>
				</div>
				<div class="flex justify-between">
					<p class="text-gray-600">Spot APR</p>
					<p class="text-neutral-800">{stats.SPOTAPR} %</p>
				</div>
				<div class="flex justify-between">
					<p class="text-gray-600">24H APR</p>
					<p class="text-neutral-800">{stats['24APR']} %</p>
				</div>
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
