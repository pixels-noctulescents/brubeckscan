<script lang="ts">
	import type { BrubeckNetworkStats } from '@brubeckscan/common/types/networkStats';
	import NetworkStats from '$lib/components/Network/NetworkStats.svelte';
	import NetworkGraphs from '$lib/components/Network/NetworkGraphs.svelte';
	import NetworkAverages from '$lib/components/Network/NetworkAverages.svelte';

	export let data;

	const network: BrubeckNetworkStats | undefined = data.network;
</script>

<svelte:head>
	<title>BrubeckScan | Network</title>
</svelte:head>

{#if network}
	<div class="flex w-full max-w-screen-lg flex-col gap-10 px-4 pb-40 pt-20 md:px-0">
		<div class="flex w-full flex-wrap items-stretch gap-4 md:flex-none">
			<NetworkStats stats={network.stats} />
			<NetworkAverages averages={network.averages} />
		</div>
		<div>
			<NetworkGraphs codes={network.lastRewards} />
		</div>
	</div>
{/if}
