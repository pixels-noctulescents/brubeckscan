<script lang="ts">
	import type { Averages } from '@brubeckscan/common/types/networkStats';
	import Module from './Module.svelte';

	export let averages: Averages;
</script>

<div class="flex w-full md:w-1/2">
	<Module>
		<div class="flex w-full flex-col justify-between text-lg">
			<h3 class="mb-6 text-3xl">Network averages</h3>
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
		</div>
	</Module>
</div>
