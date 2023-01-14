<script lang="ts">
	import type { BrubeckNetworkStats } from '@brubeckscan/common/types/networkStats';
	import NetworkStats from '$lib/components/NetworkStats.svelte';
	import NetworkGraphs from '$lib/components/NetworkGraphs.svelte';
	import NetworkAverages from '$lib/components/NetworkAverages.svelte';

	export let data;

	const network: BrubeckNetworkStats = data.network;
</script>

<div class="flex w-full max-w-screen-lg flex-col gap-10 p-8 pt-20 pb-40">
	<div class="gap0 flex w-full flex-wrap items-stretch md:flex-none">
		<NetworkStats stats={network.stats} />
		<NetworkAverages averages={network.averages} />
	</div>
	<div>
		<NetworkGraphs codes={network.lastRewards} />
	</div>
</div>
