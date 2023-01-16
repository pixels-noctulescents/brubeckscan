<script lang="ts">
	import type { Averages } from '@brubeckscan/common/types/networkStats';
	import Module from '$lib/components/Module.svelte';

	export let averages: Averages;
</script>

<div class="node flex w-full md:w-1/2">
	<Module>
		<div class="flex w-full flex-col text-lg">
			<h3 class="mb-2 text-2xl">Network averages</h3>
			<div class="flex justify-between">
				<p class="text-gray-600">Average topology size</p>
				<p>{averages.averageTopologySize}</p>
			</div>
			<div class="flex justify-between">
				<p class="text-gray-600">Average received claims</p>
				<p>{averages.averageReceivedClaims}</p>
			</div>
			<div class="flex justify-between">
				<p class="text-gray-600">Average mean propagation delay</p>
				<p>{Math.round(averages.averageMeanPropagationDelay)}</p>
			</div>
			<div class="flex justify-between">
				<p class="text-gray-600">Average missing claims</p>
				<p>{Math.round(averages.averageTopologySize - averages.averageReceivedClaims)}</p>
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
